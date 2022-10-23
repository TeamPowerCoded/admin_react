import './App.css';

function App() {
  return (
    <div>
    <div className="side-bar">
      <div className="logo-name">
        <h1>Logo</h1>
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Discussions</li>
        <li>Announcement</li>
        <li>News</li>
        <li>Blog</li>
      </ul>
    </div>
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="search">
            <input type="text" placeholder="Search.." />
            <button type="submit"></button>
          </div>
          <div className="user">
            <a href="#" className="btn">Home</a>
            <img src="/notifications.png" alt="" />
            <div className="img-case">
              <img src="/user.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="cards">
          <div className="card">
            <div className="box">
              <h2>2194</h2>
              <h3>Discussions</h3>
            </div>
            <div className="icon-design">
              <img src="/img/discussion.png" alt="" />
            </div>
          </div>

          <div className="card">
            <div className="box">
              <h2>419</h2>
              <h3>Announcement</h3>
            </div>
            <div className="icon-design">
              <img src="/img/announcement.png" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h2>214</h2>
              <h3>News</h3>
            </div>
            <div className="icon-design">
              <img src="/img/news.png" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h2>94</h2>
              <h3>Blog</h3>
            </div>
            <div className="icon-design">
              <img src="/img/blog.png" alt="" />
            </div>
          </div>
        </div>
        <div className="content-ii">
          <div className="recent-announcement">
            <div className="title">
              <h2>Recent Announcements</h2>
              <a href="#" className="btn">View All</a>
            </div>
            <table>
              <tr>
                <th>Admin</th>
                <th>Version</th>
                <th>Changes</th>
              </tr>
              <tr>
                <td>Admin Lorenz</td>
                <td>1</td>
                <td><a href="#" className="btn">View More</a></td>
              </tr>
              <tr>
                <td>Admin Paulo</td>
                <td>2</td>
                <td><a href="#" className="btn">View More</a></td>
              </tr>
              <tr>
                <td>Admin Matt</td>
                <td>3</td>
                <td><a href="#" className="btn">View More</a></td>
              </tr>
              <tr>
                <td>Admin Kevin</td>
                <td>4</td>
                <td><a href="#" className="btn">View More</a></td>
              </tr>
            </table>
          </div>
          <div className="new-user">
            <div className="title">
              <h2>New Users</h2>
              <a href="#" className="btn">View All</a>
            </div>
            <table>
              <tr>
                <th>Profile</th>
                <th>User</th>
                <th>Info</th>
              </tr>
              <tr>
                <td><img src="/user.png" alt="" /></td>
                <td>John Doe</td>
                <td><img src="/img/info.png" alt="" /></td>
              </tr>
              <tr>
                <td><img src="/user.png" alt="" /></td>
                <td>John Doe</td>
                <td><img src="/img/info.png" alt="" /></td>
              </tr>
              <tr>
                <td><img src="/user.png" alt="" /></td>
                <td>John Doe</td>
                <td><img src="/img/info.png" alt="" /></td>
              </tr>
              <tr>
                <td><img src="/user.png" alt="" /></td>
                <td>John Doe</td>
                <td><img src="/img/info.png" alt="" /></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
