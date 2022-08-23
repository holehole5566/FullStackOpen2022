const dummy = (blogs) => {
    // ...
    return 1
}

const totalLikes = (blogs) => {
    // ...
    const initialLikes = 0;
    const total = blogs.reduce(
    (accu, currentBlog) => accu + currentBlog.likes,
        initialLikes
);
    return total
  }


module.exports = {
    dummy,
    totalLikes
}