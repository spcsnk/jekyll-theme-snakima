# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "snakima"
  spec.version       = Snakima::VERSION
  spec.authors       = ["Space Snake"]
  spec.email         = ["spcsnkwork@gmail.com"]

  spec.summary       = "Jekyll theme for my own website based on minima 2.5-stable."
  spec.homepage      = "https://github.com/spcsnk/jekyll-theme-snakima"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.required_ruby_version = ">= 2.7.0"

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
end
