// Task 1



let cnv = document.querySelector('#cnv');
let ctx = cnv.getContext('2d');
let width = 500;
let height = 500;
cnv.width = width;
cnv.height = height;

function creatSnowman(obj) {
	let {y, x, color, decor} = obj;
    for(let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y * i, y / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    for(let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.fillStyle = decor;
        ctx.arc(x, y * i, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

creatSnowman({
    x: 200,
    y: 100,
    color: 'blue',
    decor: 'orange'
})
























// Task 2

window.onload = function() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	let canvas = document.getElementById('canvas');
	
	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);
	let ball = {
		rotationY: 0,
		rotationX: 0,
		rotationZ: 0,
		positionY: 0,
		positionX: 0,
		positionZ: 0,
	}

	let gui = new dat.GUI();
	gui.add(ball, 'rotationY', -0.2, 0.2);
	gui.add(ball, 'rotationX', -0.2, 0.2);
	gui.add(ball, 'rotationZ', -0.2, 0.2);
	gui.add(ball, 'positionX', -5, 5);
	gui.add(ball, 'positionY', -5, 5);
	gui.add(ball, 'positionZ', -5, 5);
	
	
	let renderer = new THREE.WebGLRenderer({canvas: canvas});
	renderer.setClearColor(0x000000);
	
	let scene = new THREE.Scene();

	let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
	camera.position.set(100, 0, 1000);
	
	let light = new THREE.AmbientLight(0xffffff);
	
	scene.add(light);
	
	let geometry = new THREE.SphereGeometry(200, 12, 12);
	// let material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.FaceColors});
	
	let material = new THREE.MeshPhongMaterial({color: 0xffffff, vertexColors: THREE.FaceColors});
	
	for(let i = 0; i < geometry.faces.length; i++) {
		geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
	
	}
	
	let mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	
	
	function loop() {
		mesh.rotation.y += ball.rotationY;
		mesh.rotation.x += ball.rotationX;
		mesh.rotation.z += ball.rotationZ;
		mesh.position.y += ball.positionY;
		mesh.position.x += ball.positionX;
		mesh.position.z += ball.positionZ;
		renderer.render(scene, camera);
		requestAnimationFrame(function(){loop();});
		
	}
	loop();
}