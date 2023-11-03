Qualtrics.SurveyEngine.addOnload(function()
{
    // Replace 'youtubePlayer' with the ID of your iframe
    var youtubePlayer = document.getElementById("player");
    
    // Define the time intervals for displaying questions in seconds
    var timeIntervals = [
        { start: 0, end: 540},   // 0-9 minutes (in seconds) 
        { start: 540, end: 1080 }, // 9-18 minutes
        { start: 1080, end: 1620 }, // 18-27 minutes
        { start: 1620, end: 2170 }  // 27-36 minutes
    ];
    
    // Function to pause the video at a random time within a given time interval
    function pauseVideoRandomly(interval) {
        var randomTime = Math.floor(Math.random() * (interval.end - interval.start + 1)) + interval.start;
        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        setTimeout(function() {
            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }, 10000); // Resume the video after 10 seconds
    }
    
    // Event listener to detect when the video ends
    youtubePlayer.addEventListener('ended', function() {
        // Display each question at random times within their respective intervals
        setTimeout(function() {
            pauseVideoRandomly(timeIntervals[0]);
            Qualtrics.SurveyEngine.showQuestion('QID581');  // 0-9 minutes
        }, getRandomTime(0, 540));
        
        setTimeout(function() {
            pauseVideoRandomly(timeIntervals[1]);
            Qualtrics.SurveyEngine.showQuestion('QID809');  // 9-18 minutes
        }, getRandomTime(540, 1080));
        
        setTimeout(function() {
            pauseVideoRandomly(timeIntervals[2]);
            Qualtrics.SurveyEngine.showQuestion('QID808');  // 18-27 minutes
        }, getRandomTime(1080, 1620));
        
        setTimeout(function() {
            pauseVideoRandomly(timeIntervals[3]);
            Qualtrics.SurveyEngine.showQuestion('QID810');  // 27-36 minutes
        }, getRandomTime(1620, 2170));
    });
    
    // Function to get a random time within a specified range
    function getRandomTime(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});