exports.getAllPosts = async (req, res) => {
  try {
    const posts = [
      {
        title: "Olympic Games",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias, dolorem quos aperiam officia labore odio qui hic voluptatibus esse reprehenderit cupiditate, provident sapiente laboriosam, suscipit accusamus repellendus. Doloribus, dicta!",
      },
      {
        title: "World Cup",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias, dolorem quos aperiam officia labore odio qui hic voluptatibus esse reprehenderit cupiditate, provident sapiente laboriosam, suscipit accusamus repellendus. Doloribus, dicta!",
      },
    ];
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error });
  }
};
