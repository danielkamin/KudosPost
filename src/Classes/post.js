/* eslint-disable no-unused-vars */
import { convertToHTML } from 'draft-convert';
class Post {
    /**
     * 
     * @param {Date} postDate - new Date created from new Date()
     * @param {Object} postContent - value of RAW Editor State function
     * @param {string} kudosPerson - person for whom kudos is made
     * @param {number} postGroup - id of selected group
     * @param {number} kudosType - id of selected Kudos
     * @param {number} id - id of this post
     * @param {number} likesCount - number of likes that post has
     * @param {number} commentsCount - number of comments that post has
     * @param {string} postAuthor - new post author ( default value 'Daniel Kamiński')
     */
    constructor(postDate,postContent,kudosPerson,postGroup,kudosType,id,likesCount=0,commentsCount=0,postAuthor = 'Daniel Kamiński'){
        this.postDate = postDate;
        this.postContent = postContent;
        this.postAuthor = postAuthor;
        this.kudosPerson = kudosPerson;
        this.id=id;
        this.postGroup = postGroup;
        this.likesCount = likesCount;
        this.commentsCount = commentsCount;
        this.kudosType = kudosType;
        console.log(this)
    }
    get formattedPost(){
        return this;
    }


}

export default Post;