---
layout: posts
title: How to Pluck Multiple Columns in Rails 3
author: Zachariah Ngonyani
abstract: Open Active record relation class and adding a method to Pluck Multiple Columns
---
We all know that plucking multiple columns from a rails 3 app could be a pain. Fortunately rails 4 addressed this but still for those still running on the previous versions of rails this is still an issue. 

A few days ago, i was trying to see how many people have logged in into my application and wanted to display their sign_in_count next to their email addresses. Usually this is simple in rails 4 as you can just do 
  {% highlight ruby linenos %}
    User.where('sign_in_count > 0').pluck(:email, :sign_in_count)
  {% endhighlight %}

  The app is running rails 3 and the pluck method in Rails 3 only allows plucking a single column, so we had to find a way to make our owm method to overcome this.

Thanks to monkey-patching, we just had to re-open the **Active Record** Module and add the mothod, check the code below. 

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
