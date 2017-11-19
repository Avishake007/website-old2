const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const collections = require('metalsmith-collections');
const pagination = require('metalsmith-pagination');
const metadata = require('metalsmith-filemetadata');
const permalinks = require('metalsmith-permalinks');
const helpers = require('metalsmith-register-helpers');
const layouts = require('metalsmith-layouts');

process.env.TZ = 'Pacific';

const app = metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(collections({
    posts: {
      pattern: 'blog/*.md',
      sortBy: function (a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
      },
      reverse: true
    }
  }))
  .use(pagination({
    'collections.posts': {
      perPage: 10,
      layout: 'blog.hbs',
      first: 'blog/index.html',
      path: 'blog/page/:num/index.html'
    }
  }))
  .use(metadata([
    {
      pattern: 'blog/*.md',
      metadata: { layout: 'post.hbs' }
    }
  ]))
  .use(markdown({
    gfm: true,
    smartypants: true
  }))
  .use(permalinks({
    relative: false,
    pattern: ':slug'
  }))
  .use(helpers())
  .use(layouts({
    engine: 'handlebars',
    directory: 'layouts',
    partials: 'layouts/partials'
  }));

if (module.parent) {
  module.exports = app;
} else {
  app.build(function (err) {
    if (err) {
      throw err;
    }
  });
}