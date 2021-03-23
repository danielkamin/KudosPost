/**
 * @property {string} content - 
 * @property {string} author -
 * @property {object} kudos -
 * @property {string} group -
 * @property {number} commentsCount -
 * @property {number} commentsCount -
 */
class Post {
    constructor(content,author,kudos,group,commentsCount,likesCount){
        this.content = content;
        this.author = author;
        this.kudos = kudos;
        this.group = group;
        this.likesCount = likesCount;
        this.commentsCount= commentsCount;
    }
}

export default Post;