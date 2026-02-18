import React from "react";
import Comments from "./Comments";

const comments = [
  {
    id: 1,
    user: "Anagha",
    comment: "Any thoughts on this approach?",
    time: "5 mins ago",
    replies: [
      {
        id: 15,
        user: "Akhil",
        comment: "Looks good to me 👍",
        time: "3 mins ago",
        replies: [
          {
            id: 16,
            user: "Vishnu",
            comment: "Looks good to me 👍",
            time: "3 mins ago",
            replies: [
              {
                id: 17,
                user: "Monish",
                comment: "Looks good to me 👍",
                time: "3 mins ago",
                replies: [],
              },
              {
                id: 18,
                user: "Sneha",
                comment: "Maybe handle edge cases?",
                time: "2 mins ago",
                replies: [],
              },
            ],
          },
          {
            id: 19,
            user: "Sneha",
            comment: "Maybe handle edge cases?",
            time: "2 mins ago",
            replies: [],
          },
        ],
      },
      {
        id: 12,
        user: "Neethu",
        comment: "Maybe handle edge cases?",
        time: "2 mins ago",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    user: "Vishnu",
    comment: "Any thoughts on this approach?",
    time: "5 mins ago",
    replies: [
      {
        id: 11,
        user: "Monish",
        comment: "Looks good to me 👍",
        time: "3 mins ago",
        replies: [
          {
            id: 20,
            user: "Mridu",
            comment: "Maybe handle edge cases?",
            time: "2 mins ago",
            replies: [],
          },

          {
            id: 21,
            user: "Shakthy",
            comment: "Looks good to me 👍",
            time: "3 mins ago",
            replies: [],
          },
        ],
      },
      {
        id: 22,
        user: "Sahu",
        comment: "Maybe handle edge cases?",
        time: "2 mins ago",
        replies: [],
      },
      {
        id: 23,
        user: "Jewl",
        comment: "Looks good to me 👍",
        time: "3 mins ago",
        replies: [],
      },
      {
        id: 24,
        user: "Sanila",
        comment: "Maybe handle edge cases?",
        time: "2 mins ago",
        replies: [],
      },
    ],
  },
  {
    id: 25,
    user: "Sreekkuttan",
    comment: "Why not use memo here?",
    time: "20 mins ago",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comments data={comment} />
      <div className="ml-6">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="max-w-2xl  p-4">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
