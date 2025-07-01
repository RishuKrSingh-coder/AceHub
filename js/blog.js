// Initial posts array with 12 posts
let posts = Array.from({ length: 1 }, (_, i) => ({
  author: "ACEHUB",
  avatar: "cropped_image.png", // Ensure this image exists in your project
  date: "3 days ago",
  read: "3 min read",
  title: `"Building Your First Startup: Lessons from IIT Patna`,
  body: `Discover how students at IIT Patna are turning ideas into startups, facing challenges, and building innovative solutions for real-world problems`,
  likes: 12,
  views: 12
}));

// Add 6 more blog posts
posts.push(
  {
    author: "ACEHUB",
    avatar: "cropped_image.png",
    date: "2 days ago",
    read: "4 min read",
    title: `"Innovation at Campus: The Ideation Workshop Experience`,
    body: `The Ideation Workshop at our campus was a vibrant and transformative event, designed to ignite creativity and foster a culture of innovation among students and faculty. By bringing together diverse minds in a collaborative environment, the workshop offered participants a unique opportunity to explore the process of ideation—generating, developing, and communicating new ideas for real-world challenges.`,
    likes: 20,
    views: 45
  },
  {
    author: "ACEHUB",
    avatar: "cropped_image.png",
    date: "5 days ago",
    read: "2 min read",
    title: `"From Idea to MVP: A Student’s Journey"`,
    body: ` The journey from a simple idea to a Minimum Viable Product (MVP) is both challenging and rewarding, especially for students stepping into the world of innovation and entrepreneurship. This collage captures the essence of that journey, highlighting the key milestones, struggles, and triumphs experienced by students as they transform their concepts into tangible solutions.`,
    likes: 30,
    views: 60
  },
  {
    author: "ACEHUB",
    avatar: "cropped_image.png",
    date: "1 week ago",
    read: "5 min read",
    title: `"Overcoming Startup Challenges in College`,
    body: ` Starting a business while studying was tougher than I imagined, but it taught me so much about time management and persistence,Balancing classes and startup tasks was a daily challenge, but I learned to prioritize and stay organized.`,
    likes: 42,
    views: 78
  },
  {
    author: "ACEHUB",
    avatar: "cropped_image.png",
    date: "6 days ago",
    read: "3 min read",
    title: `" Startup Networking: Building Connections at IIT PatnaStartup Networking: Building Connections at IIT Patna"`,
    body: ` Being a part of the startup networking scene at IIT Patna has been an eye-opening experience for us. From attending E-Summit events to joining interactive sessions at the Incubation Centre, we’ve had countless opportunities to connect with founders, investors, and industry leaders. These events aren’t just about exchanging business cards—they’re about building real relationships and learning from each other’s journeys.`,
    likes: 25,
    views: 52
  },
  // {
  //   author: "ACEHUB",
  //   avatar: "cropped_image.png",
  //   date: "4 days ago",
  //   read: "4 min read",
  //   title: `"STARTUP FUNDING 101" - WORKSHOP FOR YOUNG ENTREPRENEURS`,
  //   body: `Basics of funding rounds, investor pitches, and startup valuations...`,
  //   likes: 18,
  //   views: 33
  // },
  // {
  //   author: "ACEHUB",
  //   avatar: "cropped_image.png",
  //   date: "Today",
  //   read: "3 min read",
  //   title: `"CODE & COMMUNITY" - COLLABORATION WITH GITHUB CAMPUS EXPERTS`,
  //   body: `Event recap of how ACEHub collaborated with GitHub for community growth...`,
  //   likes: 35,
  //   views: 70
  // }
);

// Render all blog posts
function renderPosts() {
  document.getElementById('postsGrid').innerHTML = posts.map(post => `
    <div class="blog-card">
      <div class="blog-header">
        <img src="${post.avatar}" alt="${post.author}" class="avatar" />
        <span class="blog-meta">
          ${post.author} &nbsp; • &nbsp; ${post.date} &nbsp; • &nbsp; ${post.read}
        </span>
      </div>
      <div class="blog-title">${post.title}</div>
      <div class="blog-body">${post.body}</div>
      <div class="blog-footer">
        <span class="likes">💜 ${post.likes}</span>
        <span class="views">👁️ ${post.views}</span>
      </div>
    </div>
  `).join('');
}

renderPosts();
