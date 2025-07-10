import * as Three from 'three';


const w = window.innerWidth;
const h = window.innerHeight;
const aspect = w/h;
const fov=75;
const near = 0.1;
const far = 10;
const camera = new Three.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const renderer = new Three.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new Three.Scene();

const geometry = new Three.CapsuleGeometry(0.5, 1.0, 32, 8);
const material =new Three.MeshBasicMaterial({
    color: 0xccffff,
    
    });
const mesh = new Three.Mesh(geometry, material);
scene.add(mesh)

const geometryn = new Three.CapsuleGeometry(0.5, 1.0, 25, 8);
const materialn =new Three.MeshBasicMaterial({
    color: 0xccff00,
    
    });
const meshn = new Three.Mesh(geometryn, materialn);
scene.add(meshn)

function animate() {
    requestAnimationFrame(animate);
    
    mesh.rotation.y *= 0.01;
    mesh.rotation.z += 0.01;
    meshn.rotation.y *= 0.01;
    meshn.rotation.x += 0.01;
    
    
    renderer.render(scene, camera);
}
animate();
renderer.render(scene, camera)
