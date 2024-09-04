// Create a class named Video. The class should be constructed with the following parameters:
//     title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
//     “uploader parameter watched all time parameter of title parameter!”
class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// Instantiate a new Video instance and call the watch() method.
const newVideo1 = new Video('cow', 'Lily', 10);
newVideo1.watch();

// Instantiate a second Video instance with different values.
const newVideo2 = new Video('dog', 'Good boy', 40);
newVideo2.watch();

//Use an array to store data for five Video instances (ie. title, uploader, time)
//Think of the best data structure to save this information within the array.
const videos = [];
videos.push(newVideo1);
videos.push(newVideo2);
videos.push(new Video('cat', 'Bad boy', 15));
videos.push(new Video('bird', 'bird in a cage', 15));
videos.push(new Video('penguin', 'Batmen', 15));

videos.forEach(video => video.watch());

