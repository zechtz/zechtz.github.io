---
layout: posts
title: Creating Amazing Sliding Tabs with Android Material Design
author: Zachariah Ngonyani
abstract: Android Material Design enable developers to create amazing UI/UX. This helps developers dedicate
published: true
---
 

Android Material Design enable developers to create amazing UI/UX. This helps developers dedicate the majority of their time working on the actual Application business logic. Being an Android developer myself, i have found this very useful, saving me lots of time. 

In this tutorial we will be building material design sliding tabs layout.

We will be using IOsched google app SlidingTabLayout, also provided in the google developers
page but its outdated, also we will use StripTabLayout from the iosched app.

Lets get started.

<h2>Prerequisites</h2>
<h3>Android Studio 1.5</h3>

{% highlight html linenos%}
https://github.com/google/iosched/blob/master/android/src/main/java/com/google/samples/apps/iosched/ui/widget/SlidingTabLayout.java & https://github.com/google/iosched/blob/master/android/src/main/java/com/google/samples/apps/iosched/ui/widget/SlidingTabLayout.java from IOsched google app.
{% endhighlight %}

<h2>
  SlidingTabLayout Implementation Overview
</h2>

We are going to have a LinearLayout with vertical orientation so that view children are placed in a hierachy
one below the other.

In our case, since we wont be having a toolbar, we are not going to define it. Next up, after the LinearLayout definition we will define  SlidingTabLayout, which will act as a Tab Strip, we could define it anywhere in the layout, but we want it above the pages being swiped, since putting it as the first child of the LinearLayout will make it appear at the top.

The second child of our layout is the ViewPager, which is required  for swiping pages.

<h3>
  Implementing Sliding TabLayout
</h3>

First thing we need is to define how our app will look like and we'll use this site's color scheme for the puporse of uniformity.

We'll define our color scheme in the resources/values/color.xml file 

{% highlight xml linenos%}
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#2196F3</color>
    <color name="colorPrimaryDark">#1976D2</color>
    <color name="colorAccent">#FF9800</color>
    <color name="white">#FFF</color>
</resources>
{% endhighlight %}

Next up, let's get  SlidingTabLayout.java and StripTabLayout.java from the links provided in the prerequisite section and add them to our project.

Now lets add the SlidingTabLayout to our main.xml file, this file should be activity_main.xml in our project.

Note that, the SlidingTabLayout has an id 'tabs'.

{% highlight xml linenos%}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context="com.watabelabs.tabdemo.Main">
 
    <com.watabelabs.tabdemo.SlidingTabLayout
        android:id="@+id/tabs"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:elevation="2dp"
        android:background="@color/colorPrimary"/>
</LinearLayout>
{% endhighlight %}

Finally, we'll add a ViewPager to our main.xml file,  we'll give it an id the id 'pager',
our main.xml file should now look like this:

{% highlight xml linenos%}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context="com.watabelabs.tabdemo.Main">

    <com.watabelabs.tabdemo.SlidingTabLayout
        android:id="@+id/tabs"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:elevation="2dp"
        android:background="@color/colorPrimary"/>
    <android.support.v4.view.ViewPager
        android:id="@+id/pager"
        android:layout_height="match_parent"
        android:layout_width="match_parent"
        android:layout_weight="1">
    </android.support.v4.view.ViewPager>
</LinearLayout>
{% endhighlight %}

With that done, now lets create the layout files for our tabs. For demonstration purposes we will have two tabs, which means, we'll make two tab_layouts, you can make as many as the tab design spec allows but for our app we'll just have ourwork and blog tab layouts.

{% highlight xml %}
 ourwork.xml
{% endhighlight %}

{% highlight xml linenos%}
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent" android:layout_height="match_parent">
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textAppearance="?android:attr/textAppearanceMedium"
        android:text="You Are Viewing Our Work"
        android:id="@+id/textView"
        android:layout_centerVertical="true"
        android:layout_centerHorizontal="true" />
</RelativeLayout>
{% endhighlight %}

{% highlight xml %}
  blog.xml
{% endhighlight %}

{% highlight xml linenos%}
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent" android:layout_height="match_parent">
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textAppearance="?android:attr/textAppearanceMedium"
        android:text="You Are Viewing Our Blog"
        android:id="@+id/textView"
        android:layout_centerVertical="true"
        android:layout_centerHorizontal="true" />
</RelativeLayout>
{% endhighlight %}

With the layouts done, now lets write our app logic.
We are going to have two fragments. A fragment for each tab. So in the same package where your MainActivity.java file is, create two java files: OurWork.java and Blog.java.

{% highlight java %}
Blog.java
{% endhighlight %}

{% highlight java linenos%}
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import com.watabelabs.tabdemo.R;
public class Blog extends Fragment {
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.blog, container, false);
        return view;
    }
}
{% endhighlight %}

{% highlight java %}
 OurWork.java
{% endhighlight %}

{% highlight java linenos%}
package com.watabelabs.tabdemo.tab_fragments;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import com.watabelabs.tabdemo.R;
/**
* Created by japheth on 2/20/16.
**/
public class OurWork  extends Fragment{
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.our_work, container, false);
        return view;
    }
}
{% endhighlight %}

Next up, we need an adapter to serve the view for each page. we'll Create a new java file ViewPagerAdapter.java
and add the following code. I will comment for more clarity on what's happening, no magic!

{% highlight java %}
ViewPagerAdapter.java
{% endhighlight %}

{% highlight java linenos%}
package com.watabelabs.tabdemo.adapters;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;
import com.watabelabs.tabdemo.tab_fragments.Blog;
import com.watabelabs.tabdemo.tab_fragments.OurWork;

public class ViewPagerAdapter extends FragmentStatePagerAdapter {
    // An array of tab titles(labels)
    String titles[];
    // Should be initialized with number of tabs
    int numOfTabs;
    // Use support fragment for your app to work on earlier devices
    // fragments were introduced in android 3.0, api 11
    Fragment fragment;
    // Constructor, initializes passed arguments with class values
    public ViewPagerAdapter(FragmentManager fm, String titles[], int numOfTabs){
        super(fm);
        this.titles = titles;
        this.numOfTabs = numOfTabs;
    }
    // This method returns a fragment object, of the selected tab
    @Override
    public Fragment getItem(int position) {
        switch (position){
            case 0:
                fragment = new OurWork();
                return fragment;
            case 1:
                fragment = new Blog();
                return fragment;
            default:
                return null;
        }
    }
    // Returns the tab's title
    @Override
    public CharSequence getPageTitle(int position) {
        return titles[position];
    }
    // Returns the number of tabs
    @Override
    public int getCount() {
        return numOfTabs;
    }
}
{% endhighlight %}

Now lets put everything together in our MainActivity.java file, comments should make everything clear.

{% highlight java  %}
 Main.java
{% endhighlight %}

{% highlight java linenos%}
package com.watabelabs.tabdemo;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import com.watabelabs.tabdemo.adapters.ViewPagerAdapter;
public class Main extends AppCompatActivity {
    SlidingTabLayout tabLayout;
    ViewPager viewPager;
    ViewPagerAdapter viewPagerAdapter;
    String titles[] = {"OurWork", "Blog"};
    int numOfTabs = 2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // Construct a viewPagerAdapter object and pass appropriate values
        // Note that we are passing getSupportFragmentManager as the first argument
        viewPagerAdapter = new ViewPagerAdapter(getSupportFragmentManager(), titles, numOfTabs);
        // Get reference to the viewPager and set the adapter
        viewPager = (ViewPager) findViewById(R.id.pager);
        viewPager.setAdapter(viewPagerAdapter);
        // Get reference to the tabLayout, setDistributedEvenly(true)
        // will make all tabs have the same width
        tabLayout = (SlidingTabLayout) findViewById(R.id.tabs);
        tabLayout.setDistributeEvenly(true);
        // setCustomColorizer(), sets the color of the tab's indicator
        tabLayout.setCustomTabColorizer(new SlidingTabLayout.TabColorizer(){
            @Override
            public int getIndicatorColor(int position) {
                return getResources().getColor(R.color.colorAccent);
            }
        });
        // initialize the tablayout's viewPager
        tabLayout.setViewPager(viewPager);
    }
}
{% endhighlight %}

Now lets try running our app,it should look perfect! our tabs are working nicely. But what if we want to customize the text color of our tabs Title for a specific event?
i.e how do we show our users the active tab he/she is on?

We need to create a selector.xml file inside  our res/drawable/ folder, it should look like this, but you can use any color you like

{% highlight xml %}
 selector.xml
{% endhighlight %}


{% highlight xml linenos%}
package com.watabelabs.tabdemo;
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_selected="true" android:color="#FFF" />
    <item android:state_focused="true" android:color="#FFF" />
    <item android:state_pressed="true" android:color="#FFF" />
    <item android:color="#bdbdbd" />
</selector>
{% endhighlight %}

We should the add it to our SlidingTabLayout.java

In SlidingTabLayout.java we'll look for a method private void populateTabStrip(), 
and add the following lines of code

{% highlight java linenos%}
tabTitleView.setTextColor(getResources().getColorStateList(R.drawable.selector));
tabTitleView.setTextSize(16);
{% endhighlight %}

Now let's take our app for a spin again, cool huh? 

If you liked the tutorial please share it, buy me a cup of coffee, or just drop in a comment in the comment section below.
