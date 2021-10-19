
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

let scene, mesh;
let controls,
heart,
group,
composer,
effectFXAA,
outlinePass;
let selectedObjects = [];
const params = {
  edgeStrength: 6.0,
  edgeGlow: 1.0,
  edgeThickness: 4,
  pulsePeriod: 5,
  rotate: true,
  usePatternTexture: false
};
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

export default {
  name: 'Heart',
  data() {
    return {
      camera: '', //创建相机
      renderer: '', //创建渲染器
      geometry: '', //创建展示对象
      material: '', //创建材质
      selectObject: [], //与射线相交的数组
      requestID: '',// 作为启用动画时返回得id，用于路由跳转离开页面得时候停止动画

      // stats: {},
      // controls: {},
      // heart: {},
      // group: {},
      // composer: {},
      // effectFXAA: {},
      // outlinePass: {}
    };
  },
  mounted() {
    this.init();
    this.animate();
    window.addEventListener('resize', this.onWindowResize, false);
    window.addEventListener('click', this.onMouseDblclick, false);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('click', this.onMouseDblclick);
    // 页面离开时停止动画
    window.cancelAnimationFrame(this.requestID);
  },
  methods: {
    init() {
      // // 创建场景
      // scene = new THREE.Scene();
      // // 创建相机
      // this.camera = new THREE.PerspectiveCamera(
      //   75,
      //   window.innerWidth / window.innerHeight,
      //   0.1,
      //   1000,
      // );
      // this.camera.position.z = 5;
      // this.camera.position.x = 0;
      // this.createGeometry();
      // this.createRender();
      // this.animate();


      const self = this
        const container = document.getElementById('container');

        //创建相机
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
        //相机放置位置
        this.camera.position.set(0, 0, 200);

        //创建场景
        scene = new THREE.Scene();

        heart = new THREE.Group();
        group = new THREE.Group();
        // 创建一个纹理图片加载器加载图片
        var textureLoader = new THREE.TextureLoader();
        // 加载背景图片
        var texture = textureLoader.load('../../assets/img/bgc.png');


        //环境光
        var light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light);
        // 添加半球光
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000033);
        hemiLight.position.set(0, 500, 0);
        scene.add(hemiLight)

        const loader = new FBXLoader();
        const path = require('./heart_end_end.fbx')
        loader.load(path, function (object) {
            //圆环组
            console.log(object)
            // 设置内圈object.children[0].children[0]
            // object.children[0].children[3].material.color.setHex('0x81BCE2')
            //心脏模型
            object.children[0].material.opacity = 0.7
            object.children[0].material.transparent = true
            // object.children[0].material.color.setHex('0x81BCE2')

            // setTimeout(() => {
                heart.add(object.children[0]);
                group.add(object.children[0])
                group.add(object.children[0])
                group.add(object.children[1])
                console.log(group)
                scene.background = texture
                // 心脏
                scene.add(heart);
                scene.add(group);
                scene.add(object);
            // }, 5000);

        }, loadingObj);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0xffffff, 1.0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // container.appendChild(renderer.domElement);

        // let container = document.getElementById('container');
        container.appendChild(this.renderer.domElement);

        controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.enableZoom = false;//启用或禁用摄像机的缩放。
        controls.maxPolarAngle = Math.PI * 0.5
        controls.minPolarAngle = Math.PI * 0.5
        controls.enablePan = false;//禁止平移
        controls.target.set(0, 12, 0);
        controls.update();

        // 周强新增
        // stats = new Stats();
        // container.appendChild(stats.dom);
        composer = new EffectComposer(this.renderer);

        const renderPass = new RenderPass(scene, this.camera);
        composer.addPass(renderPass);

        outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, this.camera);
        outlinePass.edgeStrength = 6;
        outlinePass.edgeGlow = 1.5;
        outlinePass.edgeThickness = 1.8;
        outlinePass.pulsePeriod = 3;
        outlinePass.visibleEdgeColor.set('#ca1919');

        composer.addPass(outlinePass);

        // const textureLoader = new THREE.TextureLoader();
        // textureLoader.load('zq/tri_pattern.jpg', function (texture) {
        //     outlinePass.patternTexture = texture;
        //     texture.wrapS = THREE.RepeatWrapping;
        //     texture.wrapT = THREE.RepeatWrapping;
        // });

        effectFXAA = new ShaderPass(FXAAShader);
        effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
        composer.addPass(effectFXAA);

        // window.addEventListener('resize', this.onWindowResize); // todo放开

        this.renderer.domElement.style.touchAction = 'none';
        // 手指滑动事件
        // renderer.domElement.addEventListener('pointermove', onPointerMove);

        function loadingObj(e) {
            if (e.loaded === e.total) {
                // $('.loadding').hide();
                // 页面部分
                let list = [
                    { text: "冠状动脉狭窄", id: 1, time: 3000 },
                    { text: "动脉粥样硬化", id: 2, time: 5000 },
                    { text: "心肌梗死", id: 3, time: 7500 },
                ];
                const label = document.querySelector("#label");
                for (var i = 0; i <= list.length - 1; i++) {
                    (function (i) {
                        setTimeout(function timer() {
                            const div = document.createElement("div");
                            const p = document.createElement("p");
                            p.innerText = list[i].text;

                            div.id = list[i].id;
                            div.onclick = function () {
                                // 请求
                                console.log(this.id);
                                wx.miniProgram.navigateTo({
                                    url: "/pages/hreatdetail/hreatdetail?id=" + this.id,
                                });
                            };
                            div.appendChild(p);
                            label.appendChild(div);
                            // $("#label>div").addClass("animated fadeInLeft");
                            if (i == list.length - 1) {
                                setTimeout(function () {
                                    outlinePass.edgeStrength = 0;
                                }, 2000)
                            }
                        }, list[i].time);
                    })(i);
                }
            }
        }


    },
    addSelectedObject(object) {
      selectedObjects = [];
      selectedObjects.push(object);
    },
    // 创建展示对象和材质
    createGeometry() {
      this.geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      mesh = new THREE.Mesh(this.geometry, this.material);
      scene.add(mesh);
    },
    //创建渲染器
    createRender() {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      // 这里和官网不同，是因为我想在canvas内部添加元素 ，用position：absolute  就可以 是的元素和     three.js得模型对象共存一个画布了
      let container = document.getElementById('container');
      container.appendChild(this.renderer.domElement);
    },
    // 渲染场景
    animate() {
      this.requestID = requestAnimationFrame(this.animate);

      this.checkIntersection();
      const timer = performance.now();

      if (params.rotate) {
          heart.rotation.y = timer * 0.0002;
          group.rotation.y = - timer * 0.0002;
      }

      controls.update();

      composer.render();
    },
    checkIntersection() {

      raycaster.setFromCamera(mouse, this.camera);

      const intersects = raycaster.intersectObject(scene, true);
      if (intersects.length > 0) {
          const selectedObject = intersects[0].object;
          this.addSelectedObject(selectedObject);
          outlinePass.selectedObjects = selectedObjects;
      } else {
          // outlinePass.selectedObjects = [];
      }
    },
    // 设置物体行为
    render() {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      this.renderer.render(scene, this.camera);
    },
    // 窗口变动触发的方法
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    // // 鼠标双击触发的方法
    // onMouseDblclick(event) {
    //   // 获取 raycaster 和所有模型相交的数组，其中的元素按照距离排序，越近的越靠前
    //   var intersects = this.getIntersects(event);
    //   // 获取选中最近的 Mesh 对象
    //   if (
    //     intersects.length != 0 &&
    //     intersects[0].object instanceof THREE.Mesh
    //   ) {
    //     this.$router.push({ name: 'test' });
    //   }
    // },
    // // 获取与射线相交的对象数组
    // getIntersects(event) {
    //   event.preventDefault();
    //   // 声明 raycaster 和 mouse 变量
    //   var raycaster = new THREE.Raycaster();
    //   var mouse = new THREE.Vector2();

    //   // 通过鼠标点击位置,计算出 raycaster 所需点的位置,以屏幕为中心点,范围 -1 到 1
    //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    //   //通过鼠标点击的位置(二维坐标)和当前相机的矩阵计算出射线位置
    //   raycaster.setFromCamera(mouse, this.camera);

    //   // 获取与射线相交的对象数组，其中的元素按照距离排序，越近的越靠前
    //   var intersects = raycaster.intersectObjects(scene.children);

    //   //返回选中的对象
    //   return intersects;
    // },
  },
};

