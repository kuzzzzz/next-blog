export const getPost = async () => {
  const res = await fetch(
    "https://www.googleapis.com/blogger/v3/blogs/9206358665381369147/posts/?key=AIzaSyC-dHYwD87cG5D1TOCAdhjjfmqfo6oo758"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return res;
};

export const getAllPostIds = async () => {
  const res = await fetch(
    "https://www.googleapis.com/blogger/v3/blogs/9206358665381369147/posts/?key=AIzaSyC-dHYwD87cG5D1TOCAdhjjfmqfo6oo758"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  const ids = res.items.map(({ id, author, published, title }) => {
    return {
      params: {
        id: id,
      },
    };
  });
  console.log(ids);
  return ids;
};

export const getPostData = async (id) => {
  const res = await fetch(
    ` https://www.googleapis.com/blogger/v3/blogs/9206358665381369147/posts/${id}?key=AIzaSyC-dHYwD87cG5D1TOCAdhjjfmqfo6oo758`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return { id, ...res };
};
