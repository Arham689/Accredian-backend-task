CREATE DATABASE referandearn ;
USE referandearn ;

CREATE TABLE data (
    id integer PRIMARY KEY AUTO_INCREMENT ,
    referrer_name TEXT NOT NULL ,
    referrer_email TEXT NOT NULL ,
    referee_name TEXT NOT NULL  , 
    referee_email TEXT NOT NULL ,
    referee_number TEXT NOT NULL , 
    course_name TEXT NOT NULL ,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW() 

);

INSERT INTO data (referrer_name ,referrer_email , referee_name , referee_email , referee_number , course_name )
VALUES
('text' , 'text' , 'text' , 'text' , 'text' , 'text' );