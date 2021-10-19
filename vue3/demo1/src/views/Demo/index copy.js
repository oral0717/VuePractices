import {
  reactive, // 生成响应式数据
  ref,
  computed,
  onMounted, // 组件挂载
  onUnmounted // 组件销毁
} from 'vue'
// import * as THREE from '@/utils/three.module.js';
// import { OrbitControls } from './fbx/jsm/controls/OrbitControls.js';
// import { FBXLoader } from './fbx/jsm/loaders/FBXLoader.js';
// import { EffectComposer } from './fbx/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from './fbx/jsm/postprocessing/RenderPass.js';
// import { ShaderPass } from './fbx/jsm/postprocessing/ShaderPass.js';
// import { OutlinePass } from './fbx/jsm/postprocessing/OutlinePass.js';
// import { FXAAShader } from './fbx/jsm/shaders/FXAAShader.js';
// // import { GUI } from './fbx/jsm/libs/dat.gui.module.js';

export default {
  name: 'heart',
  setup() {
    const count = ref(0)
    const state = reactive({
      heartScence: '<p>ssss</p>'
    })
    return {
      count,
      ...state
    }
  }
}
// let container,
//     stats,
//     camera,
//     controls,
//     scene,
//     renderer,
//     heart,
//     group,
//     mesh,
//     geometry,
//     material,
//     composer,
//     effectFXAA,
//     outlinePass;

// let selectedObjects = [];

// const mouse = new THREE.Vector2();
// const raycaster = new THREE.Raycaster();

// const params = {
//     edgeStrength: 6.0,
//     edgeGlow: 1.0,
//     edgeThickness: 4,
//     pulsePeriod: 5,
//     rotate: true,
//     usePatternTexture: false
// };

// init();
// animate();

// function init() {
//     // const container = document.querySelector(".container");

//     //创建相机
//     camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
//     //相机放置位置
//     camera.position.set(0, 0, 200);

//     //创建场景
//     scene = new THREE.Scene();

//     heart = new THREE.Group();
//     group = new THREE.Group();
//     // 创建一个纹理图片加载器加载图片
//     var textureLoader = new THREE.TextureLoader();
//     // 加载背景图片
//     var texture = textureLoader.load('img/bgc2.png');


//     //环境光
//     var light = new THREE.AmbientLight(0xffffff); // soft white light
//     scene.add(light);
//     // 添加半球光
//     const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000033);
//     hemiLight.position.set(0, 500, 0);
//     scene.add(hemiLight)

//     const loader = new FBXLoader();
//     loader.load('models/fbx/heart_end_end.fbx', function (object) {
//         //圆环组
//         console.log(object)
//         // 设置内圈object.children[0].children[0]
//         // object.children[0].children[3].material.color.setHex('0x81BCE2')
//         //心脏模型
//         object.children[0].material.opacity = 0.7
//         object.children[0].material.transparent = true
//         // object.children[0].material.color.setHex('0x81BCE2')

//         // setTimeout(() => {
//             heart.add(object.children[0]);
//             group.add(object.children[0])
//             group.add(object.children[0])
//             group.add(object.children[1])
//             console.log(group)
//             scene.background = texture
//             // 心脏
//             scene.add(heart);
//             scene.add(group);
//             scene.add(object);
//         // }, 5000);

//     }, loadingObj);

//     renderer = new THREE.WebGLRenderer();
//     renderer.setClearColor(0xffffff, 1.0);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // container.appendChild(renderer.domElement);

//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;//启用或禁用摄像机的缩放。
//     controls.maxPolarAngle = Math.PI * 0.5
//     controls.minPolarAngle = Math.PI * 0.5
//     controls.enablePan = false;//禁止平移
//     controls.target.set(0, 12, 0);
//     controls.update();

//     // 周强新增
//     // stats = new Stats();
//     // container.appendChild(stats.dom);
//     composer = new EffectComposer(renderer);

//     const renderPass = new RenderPass(scene, camera);
//     composer.addPass(renderPass);

//     outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
//     outlinePass.edgeStrength = 6;
//     outlinePass.edgeGlow = 1.5;
//     outlinePass.edgeThickness = 1.8;
//     outlinePass.pulsePeriod = 3;
//     outlinePass.visibleEdgeColor.set('#ca1919');

//     composer.addPass(outlinePass);

//     // const textureLoader = new THREE.TextureLoader();
//     // textureLoader.load('zq/tri_pattern.jpg', function (texture) {
//     //     outlinePass.patternTexture = texture;
//     //     texture.wrapS = THREE.RepeatWrapping;
//     //     texture.wrapT = THREE.RepeatWrapping;
//     // });

//     effectFXAA = new ShaderPass(FXAAShader);
//     effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
//     composer.addPass(effectFXAA);

//     window.addEventListener('resize', onWindowResize);

//     renderer.domElement.style.touchAction = 'none';
//     // 手指滑动事件
//     // renderer.domElement.addEventListener('pointermove', onPointerMove);

//     function loadingObj(e) {
//         if (e.loaded === e.total) {
//             // $('.loadding').hide();
//             // 页面部分
//             let list = [
//                 { text: "冠状动脉狭窄", id: 1, time: 3000 },
//                 { text: "动脉粥样硬化", id: 2, time: 5000 },
//                 { text: "心肌梗死", id: 3, time: 7500 },
//             ];
//             const label = document.querySelector("#label");
//             for (var i = 0; i <= list.length - 1; i++) {
//                 (function (i) {
//                     setTimeout(function timer() {
//                         const div = document.createElement("div");
//                         const p = document.createElement("p");
//                         p.innerText = list[i].text;

//                         div.id = list[i].id;
//                         div.onclick = function () {
//                             // 请求
//                             console.log(this.id);
//                             wx.miniProgram.navigateTo({
//                                 url: "/pages/hreatdetail/hreatdetail?id=" + this.id,
//                             });
//                         };
//                         div.appendChild(p);
//                         label.appendChild(div);
//                         // $("#label>div").addClass("animated fadeInLeft");
//                         if (i == list.length - 1) {
//                             setTimeout(function () {
//                                 outlinePass.edgeStrength = 0;
//                             }, 2000)
//                         }
//                     }, list[i].time);
//                 })(i);
//             }
//         }
//     }

// }

// function addSelectedObject(object) {
//     selectedObjects = [];
//     selectedObjects.push(object);
// }

// function checkIntersection() {

//     raycaster.setFromCamera(mouse, camera);

//     const intersects = raycaster.intersectObject(scene, true);
//     if (intersects.length > 0) {
//         const selectedObject = intersects[0].object;
//         addSelectedObject(selectedObject);
//         outlinePass.selectedObjects = selectedObjects;
//     } else {
//         // outlinePass.selectedObjects = [];
//     }
// }
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate() {
//     requestAnimationFrame(animate);
//     // group.rotation.y += 0.01;
//     // render();
//     checkIntersection();
//     // requestAnimationFrame(animate);

//     // stats.begin();

//     const timer = performance.now();

//     if (params.rotate) {
//         heart.rotation.y = timer * 0.0002;
//         group.rotation.y = - timer * 0.0002;
//     }

//     controls.update();

//     composer.render();

//     // stats.end();
// }


// 获取参数
// getParamer();
// 加载病症
// loadlist();

// function loadlist() {
//     var url = "";

//     ajax.get(url, function (res) {
//         console.log(res.list);
//         // 数组

//         const label = document.querySelector("#label");
//         for (var i = 0; i <= res.list.length - 1; i++) {
//             const div = document.createElement("div");
//             div.innerText = res.list[i].text;
//             div.id = res.list[i].id;
//             div.onclick = function () {
//                 // 请求s
//                 console.log(this.id);
//             };
//             label.appendChild(div);
//         }
//     });
// }

// function getParamer() {
//     var url = window.location.href.split("?")[1]; /*获取url里"?"后面的值*/
//     console.log(url);
//     if (url) {
//         /*判断是否是一个参数还是多个参数*/
//         url = url.split("=");
//         return url[1]; /*返回想要的参数值*/
//     } else {
//         return "";
//     }
// }
