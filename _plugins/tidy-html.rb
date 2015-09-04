require 'nokogiri'
module TextFilter
  def tidy(input)
  desired = Nokogiri::HTML::DocumentFragment.parse(input).to_html
  end
end
Liquid::Template.register_filter(TextFilter)
