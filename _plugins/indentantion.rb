# _plugins/indentation.rb
module Jekyll
  module IndentFilter
    def indent(content, indent=0)
      output = []
      indentation = ' ' * indent.to_i
      first_line = true
      content.each_line do |line|
        if first_line
          output << line
          first_line = false
        else
          output << (indentation + line)
        end
      end
      output.join('')
    end
  end

  class IndentIncludeTag < Liquid::Tag
    include IndentFilter

    def initialize(tag_name, tag_data, tokens)
      super
      @tokens = tokens
      @file, @indent, *tag_data = tag_data.split(' ')
      @tag_data = tag_data.unshift(@file).join(' ')
      @indent ||= 0
    end

    def render(context)
      # Use the standard include tag to get the file contents.
      content = Jekyll::Tags::IncludeTag.new('include', @tag_data, @tokens).render(context)
      # Apply the indent filter (above).
      indent(content, @indent)
    end
  end
end

Liquid::Template.register_filter(Jekyll::IndentFilter)
Liquid::Template.register_tag('indent_include', Jekyll::IndentIncludeTag)
