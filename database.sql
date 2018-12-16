--this is used to create a database that matches my local db
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "tag_name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects" ("name", "description", "website", "github", "date_completed", "tag_id", "thumbnail")
VALUES('Todo App', 'This is a todo App I built using HTML, CSS, and jQuery.  It allows adding new tasks, completing tasks, and deleting tasks.  All of the tasks and wether or not they have been completed is stored in a backend database.', null, 'https://github.com/travislang/vega-todo-app-weekend3', '2018-11-27', 2, '/images/todo-app.png'),
('Feedback App', 'This is a simplistic feedback app that uses react along with redux to store state across views.  It has four pages with a page indicator.  The submit button is disabled until all of the required information is entered.  It also has an admin page that shows all of the feedback that has been entered.', null, 'https://github.com/travislang/weekend-challenge-5-feedback', '2018-11-08', 5, '/images/feedback-app.png'),
('Gif Search App', 'This is a Gif App that uses the Giphy API to retrieve gifs based on user entered search terms. It uses react, redux for state management, and sagas to handle async actions.  It allows users to favorite gifs that are returned, and users can view those gifs on a favorites page.  Users can also add categories to the favorited gifs.', null, 'https://github.com/travislang/group-giphy-saga-project', '2018-12-14', 1, '/images/gif-search-app.png'),
('Gallery of my life', 'This app displays pictures and users can like individual pictures and the app also has deleting functionality.  The data is stored in a database on the backend and the app is built using react & redux.', null, 'https://github.com/travislang/weekend-4-gallery', '2018-12-02', 4, '/images/gallery-of-my-life.png');