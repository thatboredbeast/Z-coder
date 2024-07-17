export const POSTS = [
  {
    _id: "66964b5dae71643d0abd6031",
    user: {
      _id: "668054c6052e5636ed2197c5",
      fullName: "testUser",
      username: "test",
      techStack: "none",
      competetiveRating: "none",
      favouriteLanguage: "none",
      gender: "female",
      profilePic: "https://avatar.iran.liara.run/public/girl?username=test",
      createdAt: "2024-06-29T18:39:02.694Z",
      updatedAt: "2024-06-29T18:39:02.694Z",
      __v: 0,
    },
    question:  "{Given a directed graph. The task is to do Breadth First Traversal of this graph starting from 0.Note: One can move from node u to node v only if there's an edge from u to v. Find the BFS traversal of the graph starting from the 0th vertex, from left to right according to the input graph. Also, you should only take nodes directly or indirectly connected from Node 0 in consideration.} ",
    code: "vector<int> bfsOfGraph(int V, vector<int> adj[]){vector<bool> vis(V,0);vis[0]=1;queue<int>q;q.push(0);vector<int> bfs;while(!q.empty()){int node=q.front();q.pop();for(auto i:adj[node]){if(!vis[i]){q.push(i);vis[i]=1;}}bfs.push_back(node);}return bfs;",
    privacy: "private",
    comments: [
      {
        text: "first comment",
        user: {
          _id: "668054c6052e566ed2197c5",
          fullName: "testUser",
          username: "test",
          techStack: "none",
          competetiveRating: "none",
          favouriteLanguage: "none",
          gender: "female",
          profilePic: "https://avatar.iran.liara.run/public/girl?username=test",
        },
      },
    ],
  },
];
