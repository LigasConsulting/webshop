import 'bootstrap';
import WeDeploy from 'wedeploy'
import $ from 'jquery';

console.log($.fn.jquery);

function globalMailTest(){
    WeDeploy
        .email('msgs-webshop.wedeploy.io')
        .auth('3f56dee0-b3ac-4fbd-a25e-84f6835d77f5')
        .from("test@webshop.com")
        .to("mir333@seznam.cz")
        .subject("test")
        .message("test")
        .send()
        .then(function(response) {
            console.log(response);
            alert('Your email was sent successfully!');
        })
        .catch(function(error) {
            console.log(error);
            alert('Oops, something with wrong.');
        });

}


window.WEBSHP = {};
window.WEBSHP.globalMailTest = globalMailTest;
