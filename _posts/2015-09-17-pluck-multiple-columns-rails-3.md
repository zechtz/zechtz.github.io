---
layout: posts
title: How to Pluck Multiple Columns in Rails 3
author: Zachariah Ngonyani
abstract: Open Active record relation class and adding a method to Pluck Multiple Columns
---

  {% highlight ruby  linenos%}
  module ActiveRecord
    class Relation
      def pluck_multiple(*args)
        args.map! do |column_name|
          if column_name.is_a?(Symbol) && 
            column_names.include?(column_name.to_s)
            "#{connection.quote_table_name(table_name)}.#{connection.quote_column_name(column_name)}"
          else
            column_name.to_s
          end
        end
        relation = clone
        relation.select_values = args
        klass.connection.select_all(relation.arel).map! do |attributes|
          initialized_attributes = klass.initialize_attributes(attributes)
          attributes.each do |key, attribute|
            attributes[key] = klass.type_cast_attribute(key, initialized_attributes)
          end
        end
      end
    end
  end
  {% endhighlight %}
