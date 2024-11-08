import React from "react";
import './Story.css';

const Story = () => {
    return (
        <div>
            
            <header id="srpt">
                <h1 className="he1">We`blog</h1>
            </header>
            
            <article className="postcontent">
                <section className="post">
                    <h6>Jun 12, 2023 • 2 min read</h6>
                    <h2>THE STORY BEHIND “FYI: I'M ABOUT TO LOVE YOU” — AN INTERVIEW WITH KAY VAN HANS</h2>
                    <p>The hamburg-based artist opens the door to a different dimension.</p>
                </section>
                
                <section className="blog-info">
                    <img 
                        src="images/84770f_6ead7869ff5a4842aee87b0d58d83504~mv2.webp" 
                        alt="Interview with Kay Van Hans" 
                    />
                    <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in
                    a way that’s current and interesting. Think of it as an ongoing conversation where you can share
                    updates about business, trends, news, and more.</p>
                    
                    <h3>Design with Ease</h3>
                    <p className="quot">"Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you're
                    going for a more editorial style blog - there’s a stunning layout for everyone.”</p>
                    <p>Every layout comes with the latest social features built in. Readers will be able to easily share
                    posts on social networks like Facebook and Twitter, view how many people have liked a post, made
                    comments, and more. With , building your online community has never been easier.</p>
                    
                    <h3>Create Relevant Content</h3>
                    <p>You'll be posting loads of engaging content, so be sure to keep your blog organized with Categories
                    that also allow readers to explore more of what interests them. Each category of your blog has
                    its own page that’s fully customizable. Add a catchy title, a brief description, and a beautiful
                    image to the category page header to truly make it your own. You can also add tags (#vacation #dream
                    #summer) throughout your posts to reach more people, and help readers search for relevant content. 
                    Using hashtags can expand your post reach and help people find the content that matters to them. 
                    Go ahead, #hashtag away.</p>
                    
                    <h3>Stun Your Readers</h3>
                    <p className="quot">“Be original, show off your style, and tell your story.”</p>
                    <p>Blogging gives your site a voice, so let your business' personality shine through. Are you a
                    creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or
                    what your company culture is like. Add images and videos to spice it up, and pepper it with
                    slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering
                    weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of
                    business you have, one thing is for sure - blogging gives your business the opportunity to be
                    heard in a different and unconventional way.</p>
                    
                    <h3>Get Inspired</h3>
                    <p>To keep up with all things, including website-building tips and interesting articles, head over
                    to the Blog. You may even find yourself inspired to start crafting your own blog, adding unique
                    content, and stunning images and videos. Start creating your own blog now. Good luck!</p>
                </section>
            </article>
        </div>
    );
}

export default Story;
