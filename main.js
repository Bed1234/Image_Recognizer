//Set the property for webcam
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

//we are passing the value of <div id="camera"></div> in no.10 variable
camera = document.getElementById("camera");

//we are using the webcam.attach to show the live view in <div id="camera"></div> 
Webcam.attach('#camera');

//defining take snapshot
function take_snapshot() {
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';

  });
}

//we are consoling the library ml5 for check that is it connected or not
console.log('ml5 version:',ml5.version);

//Image classifier is a predefind function of ml5.js which is used to trigger the image classification function
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7d72T3xmH/model.json',modelLoaded);


//defining modelLoaded function
function modelLoaded() {
    console.log('Model Loaded!');

}

//class 105
//defining check function 
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

//defining gotResult
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
     else {
       console.log(results);
       document.getElementById("result_object_name").innerHTML = results [0] .label;
       document.getElementById("result_object_accuracy").innerHTML= results [0] .confidence.toFixed(3);
    }
}


