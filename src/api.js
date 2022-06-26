export const getComments = async () => {
    return [
      {
        id: "1",
        body: "So beautiful article, I loved it very much. Hope to see more articles like this in future.",
        username: "Rahul",
        userId: "1",
        parentId: null,
        createdAt: "2022-06-25T12:00:33.010+02:00",
      },
      {
        id: "3",
        body: "@Rahul, It's damn good!! ",
        username: "Mrinmoy",
        userId: "2",
        parentId: "1",
        createdAt: "2022-06-26T12:05:33.010+02:00",
      },
      
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Rounak",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };