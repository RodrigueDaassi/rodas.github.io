source "https://rubygems.org"

# Utilisez la version de Jekyll spécifiée par GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Si vous avez des plugins, mettez-les ici !
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-sitemap"
end

# Windows n'inclut pas les fichiers zoneinfo, donc incluez la gem tzinfo-data
# et la bibliothèque associée.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Amélioration des performances pour la surveillance des répertoires sous Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

# kramdown v2 est fourni sans le parser gfm par défaut. Si vous utilisez
# kramdown v1, commentez cette ligne.
gem "kramdown-parser-gfm"

# Ajoutez Webrick pour le serveur local
gem 'webrick', '>=1.7.0'
