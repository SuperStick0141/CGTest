/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");



class ThreeJSContainer {
    scene;
    light;
    lightTwo;
    lightTHR;
    Planets = [];
    PlanetsNum = [];
    PlanetsRot = [];
    PlanetNum = 40;
    cloud;
    constructor() { }
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x000000));
        renderer.shadowMap.enabled = true; //シャドウマップ有効
        //カメラの設定
        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0));
        const orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render         reqestAnimationFrame により次フレームを呼ぶ
        const render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        //ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff);
        let lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        this.lightTwo = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0x2a2a2a);
        let LightVec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0).clone().normalize();
        this.lightTwo.position.set(LightVec.x, LightVec.y, LightVec.z);
        this.scene.add(this.lightTwo);
        this.lightTHR = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0x2a2a2a);
        let LightVecTwo = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0).clone().normalize();
        this.lightTHR.position.set(LightVecTwo.x, LightVecTwo.y, LightVecTwo.z);
        this.scene.add(this.lightTHR);
        //--------------------------------------------------物理設定
        const world = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.World({ gravity: new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(0, -9.82, 0) });
        world.defaultContactMaterial.restitution = 0.1; //反発
        world.defaultContactMaterial.friction = 0; //摩擦
        ////--------------------------------------------------体の作成
        const edgeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0xcfcfcf });
        const BodyGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 1.3, 0.4);
        const BodyMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0x00ff00 });
        const BodyBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(BodyGeo, BodyMat);
        BodyBox.position.set(0, 1.15, 0);
        let edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(BodyGeo);
        let edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        BodyBox.add(edgeLines);
        const HeadGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.6, 0.6, 0.6);
        const HeadMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0xff0000 });
        const HeadBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(HeadGeo, HeadMat);
        HeadBox.position.set(0, 0.95, 0);
        BodyBox.add(HeadBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(HeadGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        HeadBox.add(edgeLines);
        const FaceOneGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.1, 0.1, 0.6);
        const FaceOneMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0x0000ff });
        const FaceOneBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(FaceOneGeo, FaceOneMat);
        FaceOneBox.position.set(0, -0.15, 0.3);
        HeadBox.add(FaceOneBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(FaceOneGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        FaceOneBox.add(edgeLines);
        const ArmLGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.4, 0.4);
        const ArmLMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0xff0000 });
        const ArmLBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(ArmLGeo, ArmLMat);
        ArmLBox.position.set(0.7, 0.45, 0);
        BodyBox.add(ArmLBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(ArmLGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        ArmLBox.add(edgeLines);
        const ArmRGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.4, 0.4);
        const ArmRMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0xff0000 });
        const ArmRBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(ArmRGeo, ArmRMat);
        ArmRBox.position.set(-0.7, 0.45, 0);
        BodyBox.add(ArmRBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(ArmRGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        ArmRBox.add(edgeLines);
        const ArmLLGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.6, 0.4);
        const ArmLLMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0x0000ff });
        const ArmLLBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(ArmLLGeo, ArmLLMat);
        ArmLLBox.position.set(0, -0.5, 0);
        ArmLBox.add(ArmLLBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(ArmLLGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        ArmLLBox.add(edgeLines);
        const ArmRRGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.6, 0.4);
        const ArmRRMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0x0000ff });
        const ArmRRBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(ArmRRGeo, ArmRRMat);
        ArmRRBox.position.set(0, -0.5, 0);
        ArmRBox.add(ArmRRBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(ArmRRGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        ArmRRBox.add(edgeLines);
        const LegLGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.4, 0.4);
        const LegLMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0xff0000 });
        const LegLBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(LegLGeo, LegLMat);
        LegLBox.position.set(0.3, -0.85, 0);
        BodyBox.add(LegLBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(LegLGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        LegLBox.add(edgeLines);
        const LegRGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.4, 0.4);
        const LegRMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0xff0000 });
        const LegRBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(LegRGeo, LegRMat);
        LegRBox.position.set(-0.3, -0.85, 0);
        BodyBox.add(LegRBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(LegRGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        LegRBox.add(edgeLines);
        const LegLLGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.6, 0.4);
        const LegLLMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0x0000ff });
        const LegLLBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(LegLLGeo, LegLLMat);
        LegLLBox.position.set(0, -0.5, 0);
        LegLBox.add(LegLLBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(LegLLGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        LegLLBox.add(edgeLines);
        const LegRRGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(0.4, 0.6, 0.4);
        const LegRRMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0x0000ff });
        const LegRRBox = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(LegRRGeo, LegRRMat);
        LegRRBox.position.set(0, -0.5, 0);
        LegRBox.add(LegRRBox);
        edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(LegRRGeo);
        edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
        LegRRBox.add(edgeLines);
        this.scene.add(BodyBox);
        ///----------------------------------------------------------------物理人間設定
        const BodyPhy = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 30 });
        const BodyPhyShape = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(0.8, 1.6, 0.8));
        BodyPhy.addShape(BodyPhyShape);
        BodyPhy.position.set(0, 8, 0);
        world.addBody(BodyPhy);
        ////-----------------------------地面の作成---体の作成終わり
        const loader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();
        const earthTexture = loader.load('EARTHtex.png');
        const EarthMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ map: earthTexture });
        const EarthGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.OctahedronGeometry(5, 6);
        const EarthMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(EarthGeometry, EarthMaterial);
        EarthMesh.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide;
        this.scene.add(EarthMesh);
        const EarthShape = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Sphere(4.95);
        const EarthBody = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 0 });
        EarthBody.addShape(EarthShape);
        EarthBody.position.set(EarthMesh.position.x, EarthMesh.position.y, EarthMesh.position.z);
        EarthBody.quaternion.set(EarthMesh.quaternion.x, EarthMesh.quaternion.y, EarthMesh.quaternion.z, EarthMesh.quaternion.w);
        world.addBody(EarthBody);
        ////--------------------------------------------------地面作成終了----------------惑星制作
        for (let N = 0; N < this.PlanetNum; N++) {
            let Size = Math.random() * 4;
            let randomColor = new three__WEBPACK_IMPORTED_MODULE_1__.Color(Math.random() * 0xffffff);
            const PlanetGeo = new three__WEBPACK_IMPORTED_MODULE_1__.OctahedronGeometry(Size, 2);
            const PlanetMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: randomColor });
            PlanetMat.specular = new three__WEBPACK_IMPORTED_MODULE_1__.Color(randomColor);
            const PlanetMsh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(PlanetGeo, PlanetMat);
            let RanDis = (Math.random() * 60) + 20;
            let RanY = (Math.random() * 15) - 7.5;
            let RanMove = Math.random() * 2 * Math.PI;
            PlanetMsh.position.set(RanDis * Math.cos(RanMove), RanY, RanDis * Math.sin(RanMove));
            const edges = new three__WEBPACK_IMPORTED_MODULE_1__.EdgesGeometry(PlanetGeo);
            const edgeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0xcfcfcf }); // エッジの色を設定
            const edgeLines = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments(edges, edgeMaterial);
            PlanetMsh.add(edgeLines); // メッシュにエッジラインを追加
            this.scene.add(PlanetMsh);
            this.Planets[N] = PlanetMsh;
            this.PlanetsNum[N] = RanDis;
            this.PlanetsRot[N] = RanMove;
        }
        ////////////----------------------------------------------
        let generateSprite = () => {
            //新しいキャンバスの作成
            let canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            //円形のグラデーションの作成
            let context = canvas.getContext('2d');
            let gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
            gradient.addColorStop(0, 'rgba(255,100,255,1)');
            gradient.addColorStop(0.8, 'rgba(155,0,155,1)');
            gradient.addColorStop(0.9, 'rgba(255, 255,255,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,1)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            let texture = new three__WEBPACK_IMPORTED_MODULE_1__.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        };
        const particleNum = 140 * 140;
        let geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();
        const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 1.4, map: generateSprite(), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
        let pos = new Float32Array(particleNum * 3);
        let A = 0;
        for (let x = 0; x < 140; x++) {
            for (let y = 0; y < 140; y++) {
                let RanA = (Math.random() + x) * 2 * Math.PI;
                let RanB = (Math.random() + y) * 2 * Math.PI;
                let RanD = Math.random() * 40 + 80;
                pos[A++] = RanD * Math.cos(RanA) * Math.cos(RanB);
                pos[A++] = RanD * Math.sin(RanA) * Math.cos(RanB);
                pos[A++] = RanD * Math.sin(RanB);
            }
        }
        geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(pos, 3));
        let positions = geometry.getAttribute('position');
        positions.needsUpdate = true;
        this.cloud = new three__WEBPACK_IMPORTED_MODULE_1__.Points(geometry, material);
        this.scene.add(this.cloud);
        let MoveAng = 0;
        let GravNum = -98.2;
        let ResetNum = 0;
        let JumpCan = 0;
        let RoundNum = 0;
        ////--------------------------------------------------UPDATE
        let update = (time) => {
            world.fixedStep();
            RoundNum += 0.01;
            if (RoundNum > 2 * Math.PI) {
                RoundNum = 0;
            }
            let x = Math.cos(RoundNum);
            let z = Math.sin(RoundNum);
            lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(x, 0, z).clone().normalize();
            this.light.position.set(lvec.x, lvec.y, lvec.z);
            for (let N = 0; N < this.PlanetNum; N++) {
                this.PlanetsRot[N] += N * 0.0001;
                if (this.PlanetsRot[N] > 2 * Math.PI) {
                    this.PlanetsRot[N] = 0;
                }
                let xx = Math.cos(this.PlanetsRot[N]) * this.PlanetsNum[N];
                let zz = Math.sin(this.PlanetsRot[N]) * this.PlanetsNum[N];
                this.Planets[N].position.set(xx, this.Planets[N].position.y, zz);
                this.Planets[N].rotateY(0.01);
                this.Planets[N].rotateX(0.01);
            }
            EarthMesh.rotateY(0.001);
            EarthMesh.rotateX(0.001);
            BodyBox.position.set(BodyPhy.position.x, BodyPhy.position.y, BodyPhy.position.z);
            BodyBox.quaternion.set(BodyPhy.quaternion.x, BodyPhy.quaternion.y, BodyPhy.quaternion.z, BodyPhy.quaternion.w);
            let GravAngle = BodyBox.position.clone().normalize();
            world.gravity = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(GravAngle.x * GravNum, GravAngle.y * GravNum, GravAngle.z * GravNum);
            if (ResetNum > 0) {
                ResetNum++;
                BodyPhy.quaternion = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Quaternion(0, 90, 0, 0);
                BodyPhy.position = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(0, 8, 0);
                BodyPhy.velocity.set(0, 0, 0); // 速度をゼロに設定
                BodyPhy.angularVelocity.set(0, 0, 0); // 角速度をゼロに設定
                BodyPhy.force.set(0, 0, 0);
                BodyPhy.torque.set(0, 0, 0);
                GravNum = -90;
                world.defaultContactMaterial.restitution = 0; //反発
                world.defaultContactMaterial.friction = 1; //摩擦
                if (ResetNum >= 10) {
                    ResetNum = 0;
                }
            }
            if (JumpCan > 0) {
                JumpCan++;
                if (JumpCan > 40) {
                    JumpCan = 0;
                }
            }
            document.addEventListener('keydown', (event) => {
                world.defaultContactMaterial.friction = 0; //摩擦
                GravNum = -98.2;
                if (event.key === 'ArrowLeft') {
                    if (HeadBox.rotation.y <= 0.3) {
                        HeadBox.rotateY(0.02);
                    }
                    if (BodyPhy.quaternion.y <= 0.8) {
                        BodyPhy.force.set(0, 0, 0);
                        BodyPhy.torque.set(0, 0, 0);
                        BodyPhy.velocity.set(0, 0, 0); // 速度をゼロに設定
                        BodyPhy.angularVelocity.set(0, 0, 0); // 角速度をゼロに設定
                        let RotLine = BodyBox.position.clone().normalize();
                        BodyPhy.angularVelocity.set(RotLine.x, RotLine.y, RotLine.z); //AngleBt=1;
                    }
                }
                if (event.key === 'ArrowRight') {
                    if (HeadBox.rotation.y >= -0.3) {
                        HeadBox.rotateY(-0.02);
                    }
                    if (BodyPhy.quaternion.y >= -0.8) {
                        BodyPhy.force.set(0, 0, 0);
                        BodyPhy.torque.set(0, 0, 0);
                        BodyPhy.velocity.set(0, 0, 0); // 速度をゼロに設定
                        BodyPhy.angularVelocity.set(0, 0, 0); // 角速度をゼロに設定
                        let RotLine = BodyBox.position.clone().normalize();
                        BodyPhy.angularVelocity.set(RotLine.x * -1, RotLine.y * -1, RotLine.z * -1); //AngleBt=1;
                    }
                }
                if (event.key === 'ArrowUp' && (JumpCan == 0)) {
                    const forward = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(0, 0, 8);
                    BodyPhy.quaternion.vmult(forward, forward);
                    BodyPhy.velocity.set(forward.x, forward.y, forward.z);
                    HeadBox.rotation.y = 0;
                    if (MoveAng == 0) {
                        LegLBox.rotateX(0.0005);
                        LegRBox.rotateX(-0.0005);
                        ArmLBox.rotateX(-0.0005);
                        ArmRBox.rotateX(0.0005);
                        if (LegLBox.rotation.x >= 0.6) {
                            MoveAng = 1;
                        }
                    }
                    else if (MoveAng == 1) {
                        LegLBox.rotateX(-0.0005);
                        LegRBox.rotateX(0.0005);
                        ArmLBox.rotateX(0.0005);
                        ArmRBox.rotateX(-0.0005);
                        if (LegLBox.rotation.x <= -0.6) {
                            MoveAng = 0;
                        }
                    }
                }
                if (event.key === 'ArrowDown') {
                    world.defaultContactMaterial.friction = 1; //摩擦
                    GravNum = -982;
                }
                if (event.code === 'KeyR') {
                    if (ResetNum == 0) {
                        ResetNum = 1;
                    }
                }
                if (event.code === 'Space') {
                    if (JumpCan == 0) {
                        JumpCan = 1;
                        BodyPhy.force.set(0, 0, 0);
                        BodyPhy.torque.set(0, 0, 0);
                        BodyPhy.velocity.set(0, 0, 0); // 速度をゼロに設定
                        BodyPhy.angularVelocity.set(0, 0, 0); // 角速度をゼロに設定
                        const UP = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(0, 30, 0);
                        BodyPhy.quaternion.vmult(UP, UP);
                        BodyPhy.velocity.set(UP.x, UP.y, UP.z);
                    }
                }
            });
            window.addEventListener('keyup', (event) => {
                switch (event.key) {
                    case 'ArrowUp':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                        world.defaultContactMaterial.friction = 1; //摩擦
                        BodyPhy.angularVelocity.set(0, 0, 0);
                        if (JumpCan == 0) {
                            GravNum = -982;
                        }
                        break;
                }
            });
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 10, 10));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_cannon-es_dist_cannon-es_js-node_modules_three_examples_jsm_controls_Orb-e58bd2"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gJ2Nhbm5vbi1lcyc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcblxuXG5jbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcbiAgICBwcml2YXRlIGxpZ2h0VHdvOiBUSFJFRS5MaWdodDtcbiAgICBwcml2YXRlIGxpZ2h0VEhSOiBUSFJFRS5MaWdodDtcbiAgICBwcml2YXRlIFBsYW5ldHM6IFRIUkVFLk1lc2hbXT1bXTtcbiAgICBwcml2YXRlIFBsYW5ldHNOdW06IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBQbGFuZXRzUm90OiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgUGxhbmV0TnVtPTQwO1xuXG4gICAgcHJpdmF0ZSBjbG91ZDpUSFJFRS5Qb2ludHM7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IFxuICAgIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweDAwMDAwMCkpOyBcbiAgICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlOyAvL+OCt+ODo+ODieOCpuODnuODg+ODl+acieWKuVxuXG4gICAgICAgIC8v44Kr44Oh44Op44Gu6Kit5a6aXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIGNvbnN0IG9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICAgICAgLy8g5q+O44OV44Os44O844Og44GudXBkYXRl44KS5ZG844KT44Gn77yMcmVuZGVyICAgICAgICAgcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGNvbnN0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAgICAgLy/jg6njgqTjg4jjga7oqK3lrppcbiAgICAgICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbiAgICAgICAgbGV0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgICAgIHRoaXMubGlnaHRUd28gPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweDJhMmEyYSk7XG4gICAgICAgIGxldCBMaWdodFZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLm5vcm1hbGl6ZSgpO1xuICAgICAgICB0aGlzLmxpZ2h0VHdvLnBvc2l0aW9uLnNldChMaWdodFZlYy54LCBMaWdodFZlYy55LCBMaWdodFZlYy56KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodFR3byk7XG5cbiAgICAgICAgdGhpcy5saWdodFRIUiA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4MmEyYTJhKTtcbiAgICAgICAgbGV0IExpZ2h0VmVjVHdvID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApLm5vcm1hbGl6ZSgpO1xuICAgICAgICB0aGlzLmxpZ2h0VEhSLnBvc2l0aW9uLnNldChMaWdodFZlY1R3by54LCBMaWdodFZlY1R3by55LCBMaWdodFZlY1R3by56KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodFRIUik7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3niannkIboqK3lrppcbiAgICAgICAgY29uc3Qgd29ybGQgPSBuZXcgQ0FOTk9OLldvcmxkKHsgZ3Jhdml0eTogbmV3IENBTk5PTi5WZWMzKDAsIC05LjgyLCAwKX0pO1xuICAgICAgICB3b3JsZC5kZWZhdWx0Q29udGFjdE1hdGVyaWFsLnJlc3RpdHV0aW9uID0gMC4xOy8v5Y+N55m6XG4gICAgICAgIHdvcmxkLmRlZmF1bHRDb250YWN0TWF0ZXJpYWwuZnJpY3Rpb24gPSAwOy8v5pGp5pOmXG5cblxuLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5L2T44Gu5L2c5oiQXG5jb25zdCBlZGdlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe2NvbG9yOiAweGNmY2ZjZiB9KTtcblxuXG5jb25zdCBCb2R5R2VvID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEuMywgMC40KTtcbmNvbnN0IEJvZHlNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSk7XG5jb25zdCBCb2R5Qm94ID0gbmV3IFRIUkVFLk1lc2goQm9keUdlbywgQm9keU1hdCk7ICAgIEJvZHlCb3gucG9zaXRpb24uc2V0KDAsIDEuMTUsIDApO1xubGV0IGVkZ2VzID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkoQm9keUdlbyk7bGV0IGVkZ2VMaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZWRnZXMsIGVkZ2VNYXRlcmlhbCk7Qm9keUJveC5hZGQoZWRnZUxpbmVzKTtcblxuY29uc3QgSGVhZEdlbyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjYsIDAuNiwgMC42KTtcbmNvbnN0IEhlYWRNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwMDAgfSk7XG5jb25zdCBIZWFkQm94ID0gbmV3IFRIUkVFLk1lc2goSGVhZEdlbywgSGVhZE1hdCk7ICAgIEhlYWRCb3gucG9zaXRpb24uc2V0KDAsIDAuOTUsIDApO1xuQm9keUJveC5hZGQoSGVhZEJveCk7IFxuZWRnZXMgPSBuZXcgVEhSRUUuRWRnZXNHZW9tZXRyeShIZWFkR2VvKTtlZGdlTGluZXMgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGVkZ2VzLCBlZGdlTWF0ZXJpYWwpO0hlYWRCb3guYWRkKGVkZ2VMaW5lcyk7XG5cbmNvbnN0IEZhY2VPbmVHZW8gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC4xLCAwLjEsIDAuNik7XG5jb25zdCBGYWNlT25lTWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMGZmIH0pO1xuY29uc3QgRmFjZU9uZUJveCA9IG5ldyBUSFJFRS5NZXNoKEZhY2VPbmVHZW8sIEZhY2VPbmVNYXQpOyAgICBGYWNlT25lQm94LnBvc2l0aW9uLnNldCgwLCAtMC4xNSwgMC4zKTtcbkhlYWRCb3guYWRkKEZhY2VPbmVCb3gpOyBcbmVkZ2VzID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkoRmFjZU9uZUdlbyk7ZWRnZUxpbmVzID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhlZGdlcywgZWRnZU1hdGVyaWFsKTtGYWNlT25lQm94LmFkZChlZGdlTGluZXMpO1xuXG5jb25zdCBBcm1MR2VvID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuNCwgMC40LCAwLjQpO1xuY29uc3QgQXJtTE1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KTtcbmNvbnN0IEFybUxCb3ggPSBuZXcgVEhSRUUuTWVzaChBcm1MR2VvLCBBcm1MTWF0KTsgICBBcm1MQm94LnBvc2l0aW9uLnNldCgwLjcsIDAuNDUsIDApO1xuQm9keUJveC5hZGQoQXJtTEJveCk7IFxuZWRnZXMgPSBuZXcgVEhSRUUuRWRnZXNHZW9tZXRyeShBcm1MR2VvKTtlZGdlTGluZXMgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGVkZ2VzLCBlZGdlTWF0ZXJpYWwpO0FybUxCb3guYWRkKGVkZ2VMaW5lcyk7XG5cbmNvbnN0IEFybVJHZW8gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC40LCAwLjQsIDAuNCk7XG5jb25zdCBBcm1STWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pO1xuY29uc3QgQXJtUkJveCA9IG5ldyBUSFJFRS5NZXNoKEFybVJHZW8sIEFybVJNYXQpOyAgICBBcm1SQm94LnBvc2l0aW9uLnNldCgtMC43LCAwLjQ1LCAwKTtcbkJvZHlCb3guYWRkKEFybVJCb3gpOyBcbmVkZ2VzID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkoQXJtUkdlbyk7ZWRnZUxpbmVzID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhlZGdlcywgZWRnZU1hdGVyaWFsKTtBcm1SQm94LmFkZChlZGdlTGluZXMpO1xuXG5jb25zdCBBcm1MTEdlbyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjQsIDAuNiwgMC40KTtcbmNvbnN0IEFybUxMTWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMGZmIH0pO1xuY29uc3QgQXJtTExCb3ggPSBuZXcgVEhSRUUuTWVzaChBcm1MTEdlbywgQXJtTExNYXQpOyAgICBBcm1MTEJveC5wb3NpdGlvbi5zZXQoMCwgLTAuNSwgMCk7XG5Bcm1MQm94LmFkZChBcm1MTEJveCk7IFxuZWRnZXMgPSBuZXcgVEhSRUUuRWRnZXNHZW9tZXRyeShBcm1MTEdlbyk7ZWRnZUxpbmVzID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhlZGdlcywgZWRnZU1hdGVyaWFsKTtBcm1MTEJveC5hZGQoZWRnZUxpbmVzKTtcblxuY29uc3QgQXJtUlJHZW8gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC40LCAwLjYsIDAuNCk7XG5jb25zdCBBcm1SUk1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KTtcbmNvbnN0IEFybVJSQm94ID0gbmV3IFRIUkVFLk1lc2goQXJtUlJHZW8sIEFybVJSTWF0KTsgICAgQXJtUlJCb3gucG9zaXRpb24uc2V0KDAsIC0wLjUsIDApO1xuQXJtUkJveC5hZGQoQXJtUlJCb3gpOyBcbmVkZ2VzID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkoQXJtUlJHZW8pO2VkZ2VMaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZWRnZXMsIGVkZ2VNYXRlcmlhbCk7QXJtUlJCb3guYWRkKGVkZ2VMaW5lcyk7XG5cbmNvbnN0IExlZ0xHZW8gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC40LCAwLjQsIDAuNCk7XG5jb25zdCBMZWdMTWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pO1xuY29uc3QgTGVnTEJveCA9IG5ldyBUSFJFRS5NZXNoKExlZ0xHZW8sIExlZ0xNYXQpOyAgIExlZ0xCb3gucG9zaXRpb24uc2V0KDAuMywgLTAuODUsIDApO1xuQm9keUJveC5hZGQoTGVnTEJveCk7IFxuZWRnZXMgPSBuZXcgVEhSRUUuRWRnZXNHZW9tZXRyeShMZWdMR2VvKTtlZGdlTGluZXMgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGVkZ2VzLCBlZGdlTWF0ZXJpYWwpO0xlZ0xCb3guYWRkKGVkZ2VMaW5lcyk7XG5cbmNvbnN0IExlZ1JHZW8gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC40LCAwLjQsIDAuNCk7XG5jb25zdCBMZWdSTWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pO1xuY29uc3QgTGVnUkJveCA9IG5ldyBUSFJFRS5NZXNoKExlZ1JHZW8sIExlZ1JNYXQpOyAgICBMZWdSQm94LnBvc2l0aW9uLnNldCgtMC4zLCAtMC44NSwgMCk7XG5Cb2R5Qm94LmFkZChMZWdSQm94KTsgXG5lZGdlcyA9IG5ldyBUSFJFRS5FZGdlc0dlb21ldHJ5KExlZ1JHZW8pO2VkZ2VMaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZWRnZXMsIGVkZ2VNYXRlcmlhbCk7TGVnUkJveC5hZGQoZWRnZUxpbmVzKTtcblxuY29uc3QgTGVnTExHZW8gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC40LCAwLjYsIDAuNCk7XG5jb25zdCBMZWdMTE1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KTtcbmNvbnN0IExlZ0xMQm94ID0gbmV3IFRIUkVFLk1lc2goTGVnTExHZW8sIExlZ0xMTWF0KTsgICAgTGVnTExCb3gucG9zaXRpb24uc2V0KDAsIC0wLjUsIDApO1xuTGVnTEJveC5hZGQoTGVnTExCb3gpOyBcbmVkZ2VzID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkoTGVnTExHZW8pO2VkZ2VMaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZWRnZXMsIGVkZ2VNYXRlcmlhbCk7TGVnTExCb3guYWRkKGVkZ2VMaW5lcyk7XG5cbmNvbnN0IExlZ1JSR2VvID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuNCwgMC42LCAwLjQpO1xuY29uc3QgTGVnUlJNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwZmYgfSk7XG5jb25zdCBMZWdSUkJveCA9IG5ldyBUSFJFRS5NZXNoKExlZ1JSR2VvLCBMZWdSUk1hdCk7ICAgIExlZ1JSQm94LnBvc2l0aW9uLnNldCgwLCAtMC41LCAwKTtcbkxlZ1JCb3guYWRkKExlZ1JSQm94KTsgXG5lZGdlcyA9IG5ldyBUSFJFRS5FZGdlc0dlb21ldHJ5KExlZ1JSR2VvKTtlZGdlTGluZXMgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGVkZ2VzLCBlZGdlTWF0ZXJpYWwpO0xlZ1JSQm94LmFkZChlZGdlTGluZXMpO1xuXG50aGlzLnNjZW5lLmFkZChCb2R5Qm94KTtcbi8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3niannkIbkurrplpPoqK3lrppcbmNvbnN0IEJvZHlQaHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAzMCB9KTtcbmNvbnN0IEJvZHlQaHlTaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygwLjgsIDEuNiwgMC44KSk7XG5Cb2R5UGh5LmFkZFNoYXBlKEJvZHlQaHlTaGFwZSk7XG5Cb2R5UGh5LnBvc2l0aW9uLnNldCgwLDgsMCk7XG53b3JsZC5hZGRCb2R5KEJvZHlQaHkpO1xuLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Zyw6Z2i44Gu5L2c5oiQLS0t5L2T44Gu5L2c5oiQ57WC44KP44KKXG5jb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuY29uc3QgZWFydGhUZXh0dXJlID0gbG9hZGVyLmxvYWQoJ0VBUlRIdGV4LnBuZycpO1xuY29uc3QgRWFydGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7bWFwOiBlYXJ0aFRleHR1cmUgfSk7XG5jb25zdCBFYXJ0aEdlb21ldHJ5ID0gbmV3IFRIUkVFLk9jdGFoZWRyb25HZW9tZXRyeSg1LCA2KTtcbmNvbnN0IEVhcnRoTWVzaCA9IG5ldyBUSFJFRS5NZXNoKEVhcnRoR2VvbWV0cnksIEVhcnRoTWF0ZXJpYWwpO1xuRWFydGhNZXNoLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xudGhpcy5zY2VuZS5hZGQoRWFydGhNZXNoKTtcblxuY29uc3QgRWFydGhTaGFwZSA9IG5ldyBDQU5OT04uU3BoZXJlKDQuOTUpO1xuY29uc3QgRWFydGhCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogMCB9KTtcbkVhcnRoQm9keS5hZGRTaGFwZShFYXJ0aFNoYXBlKTtcbkVhcnRoQm9keS5wb3NpdGlvbi5zZXQoRWFydGhNZXNoLnBvc2l0aW9uLngsIEVhcnRoTWVzaC5wb3NpdGlvbi55LCBFYXJ0aE1lc2gucG9zaXRpb24ueik7XG5FYXJ0aEJvZHkucXVhdGVybmlvbi5zZXQoRWFydGhNZXNoLnF1YXRlcm5pb24ueCwgRWFydGhNZXNoLnF1YXRlcm5pb24ueSwgRWFydGhNZXNoLnF1YXRlcm5pb24ueiwgRWFydGhNZXNoLnF1YXRlcm5pb24udyk7XG53b3JsZC5hZGRCb2R5KEVhcnRoQm9keSk7XG4vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lnLDpnaLkvZzmiJDntYLkuoYtLS0tLS0tLS0tLS0tLS0t5oOR5pif5Yi25L2cXG5mb3IobGV0IE49MDtOPHRoaXMuUGxhbmV0TnVtO04rKylcbntcbmxldCBTaXplID0gTWF0aC5yYW5kb20oKSo0O1xubGV0IHJhbmRvbUNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZik7XG5jb25zdCBQbGFuZXRHZW8gPSBuZXcgVEhSRUUuT2N0YWhlZHJvbkdlb21ldHJ5KFNpemUsIDIpO1xuY29uc3QgUGxhbmV0TWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogcmFuZG9tQ29sb3J9KTtcblBsYW5ldE1hdC5zcGVjdWxhciA9IG5ldyBUSFJFRS5Db2xvcihyYW5kb21Db2xvcik7XG5jb25zdCBQbGFuZXRNc2ggPSBuZXcgVEhSRUUuTWVzaChQbGFuZXRHZW8sIFBsYW5ldE1hdCk7XG5sZXQgUmFuRGlzID0gKE1hdGgucmFuZG9tKCkqNjApICsyMDsgICAgbGV0IFJhblkgPShNYXRoLnJhbmRvbSgpKjE1KS03LjU7ICAgICBsZXQgUmFuTW92ZT1NYXRoLnJhbmRvbSgpKjIqTWF0aC5QSTtcblBsYW5ldE1zaC5wb3NpdGlvbi5zZXQoUmFuRGlzKk1hdGguY29zKFJhbk1vdmUpLFJhblksUmFuRGlzKk1hdGguc2luKFJhbk1vdmUpKTtcblxuY29uc3QgZWRnZXMgPSBuZXcgVEhSRUUuRWRnZXNHZW9tZXRyeShQbGFuZXRHZW8pO1xuY29uc3QgZWRnZU1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4Y2ZjZmNmIH0pOyAvLyDjgqjjg4Pjgrjjga7oibLjgpLoqK3lrppcbmNvbnN0IGVkZ2VMaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZWRnZXMsIGVkZ2VNYXRlcmlhbCk7XG5QbGFuZXRNc2guYWRkKGVkZ2VMaW5lcyk7IC8vIOODoeODg+OCt+ODpeOBq+OCqOODg+OCuOODqeOCpOODs+OCkui/veWKoFxuXG50aGlzLnNjZW5lLmFkZChQbGFuZXRNc2gpO1xudGhpcy5QbGFuZXRzW05dPVBsYW5ldE1zaDtcbnRoaXMuUGxhbmV0c051bVtOXT1SYW5EaXM7XG50aGlzLlBsYW5ldHNSb3RbTl09UmFuTW92ZTtcbn1cbi8vLy8vLy8vLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmxldCBnZW5lcmF0ZVNwcml0ZSA9ICgpID0+XG4gICAge1xuICAgICAgICAvL+aWsOOBl+OBhOOCreODo+ODs+ODkOOCueOBruS9nOaIkFxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTY7XG4gICAgICAgICAvL+WGhuW9ouOBruOCsOODqeODh+ODvOOCt+ODp+ODs+OBruS9nOaIkFxuICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgIGxldCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDAsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCBjYW52YXMud2lkdGggLyAyKTtcbiAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMTAwLDI1NSwxKScpO1xuICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgJ3JnYmEoMTU1LDAsMTU1LDEpJyk7XG4gICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC45LCAncmdiYSgyNTUsIDI1NSwyNTUsMSknKTtcbiAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwxKScpO1xuICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoY2FudmFzKTtcbiAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxuICAgIGNvbnN0IHBhcnRpY2xlTnVtID0gMTQwICogMTQwO1xuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHsgc2l6ZTogMS40LCBtYXA6IGdlbmVyYXRlU3ByaXRlKCksIGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLCBjb2xvcjogMHhmZmZmZmYsIGRlcHRoV3JpdGU6IGZhbHNlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC41IH0pIFxuICAgIGxldCBwb3MgPSBuZXcgRmxvYXQzMkFycmF5KHBhcnRpY2xlTnVtICogMyk7XG4gICAgbGV0IEE9MDtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDE0MDsgeCsrKSBcbiAgICB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTQwOyB5KyspIFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgUmFuQT0oTWF0aC5yYW5kb20oKSt4KSoyKk1hdGguUEk7ICAgbGV0IFJhbkI9KE1hdGgucmFuZG9tKCkreSkqMipNYXRoLlBJOyBsZXQgUmFuRD1NYXRoLnJhbmRvbSgpKjQwICArODA7XG4gICAgICAgICAgICBwb3NbQSsrXT1SYW5EKk1hdGguY29zKFJhbkEpKk1hdGguY29zKFJhbkIpOyAgIHBvc1tBKytdPSBSYW5EKk1hdGguc2luKFJhbkEpKk1hdGguY29zKFJhbkIpOyAgICAgICAgcG9zW0ErK109UmFuRCpNYXRoLnNpbihSYW5CKTtcbiAgICAgICAgfVxuICAgIH1cbmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xubGV0IHBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbnBvc2l0aW9ucy5uZWVkc1VwZGF0ZSA9IHRydWU7XG50aGlzLmNsb3VkID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xudGhpcy5zY2VuZS5hZGQodGhpcy5jbG91ZCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5sZXQgTW92ZUFuZz0wO1xubGV0IEdyYXZOdW09LTk4LjI7XG5sZXQgUmVzZXROdW09MDtcbmxldCBKdW1wQ2FuPTA7XG5sZXQgUm91bmROdW09MDtcbi8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVQREFURVxuICAgICAgICBsZXQgdXBkYXRlOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICB3b3JsZC5maXhlZFN0ZXAoKTtcbiAgICAgICAgICAgIFJvdW5kTnVtKz0wLjAxO2lmKFJvdW5kTnVtPjIqTWF0aC5QSSl7Um91bmROdW09MDt9XG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguY29zKFJvdW5kTnVtKTtcbiAgICAgICAgICAgIGxldCB6ID0gTWF0aC5zaW4oUm91bmROdW0pO1xuICAgICAgICAgICAgbHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKHgsIDAsIHopLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG5cblxuICAgICAgICAgICAgZm9yKGxldCBOPTA7Tjx0aGlzLlBsYW5ldE51bTtOKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGFuZXRzUm90W05dKz1OKjAuMDAwMTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLlBsYW5ldHNSb3RbTl0+MipNYXRoLlBJKXt0aGlzLlBsYW5ldHNSb3RbTl09MDt9XG4gICAgICAgICAgICAgICAgbGV0IHh4ID0gTWF0aC5jb3ModGhpcy5QbGFuZXRzUm90W05dKSAqdGhpcy5QbGFuZXRzTnVtW05dO1xuICAgICAgICAgICAgICAgIGxldCB6eiA9IE1hdGguc2luKHRoaXMuUGxhbmV0c1JvdFtOXSkgKnRoaXMuUGxhbmV0c051bVtOXTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYW5ldHNbTl0ucG9zaXRpb24uc2V0KHh4LCAgIHRoaXMuUGxhbmV0c1tOXS5wb3NpdGlvbi55LCAgIHp6KTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYW5ldHNbTl0ucm90YXRlWSgwLjAxKTsgIHRoaXMuUGxhbmV0c1tOXS5yb3RhdGVYKDAuMDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgRWFydGhNZXNoLnJvdGF0ZVkoMC4wMDEpO0VhcnRoTWVzaC5yb3RhdGVYKDAuMDAxKTtcblxuICAgICAgICAgICAgQm9keUJveC5wb3NpdGlvbi5zZXQoQm9keVBoeS5wb3NpdGlvbi54LCBCb2R5UGh5LnBvc2l0aW9uLnksIEJvZHlQaHkucG9zaXRpb24ueik7XG4gICAgICAgICAgICBCb2R5Qm94LnF1YXRlcm5pb24uc2V0KEJvZHlQaHkucXVhdGVybmlvbi54LCBCb2R5UGh5LnF1YXRlcm5pb24ueSwgQm9keVBoeS5xdWF0ZXJuaW9uLnosIEJvZHlQaHkucXVhdGVybmlvbi53KTtcbiAgICAgICAgICAgIGxldCBHcmF2QW5nbGUgPSBCb2R5Qm94LnBvc2l0aW9uLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgd29ybGQuZ3Jhdml0eSA9IG5ldyBDQU5OT04uVmVjMyhHcmF2QW5nbGUueCpHcmF2TnVtLEdyYXZBbmdsZS55KkdyYXZOdW0sR3JhdkFuZ2xlLnoqR3Jhdk51bSk7XG5cblxuICAgICAgICAgICAgaWYoUmVzZXROdW0+MClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0TnVtKys7XG4gICAgICAgICAgICAgICAgICAgIEJvZHlQaHkucXVhdGVybmlvbj1uZXcgQ0FOTk9OLlF1YXRlcm5pb24oMCw5MCwwLDApO1xuICAgICAgICAgICAgICAgICAgICBCb2R5UGh5LnBvc2l0aW9uPW5ldyBDQU5OT04uVmVjMygwLDgsMCk7XG4gICAgICAgICAgICAgICAgICAgIEJvZHlQaHkudmVsb2NpdHkuc2V0KDAsIDAsIDApOyAgICAgICAgICAvLyDpgJ/luqbjgpLjgrzjg63jgavoqK3lrppcbiAgICAgICAgICAgICAgICAgICAgQm9keVBoeS5hbmd1bGFyVmVsb2NpdHkuc2V0KDAsIDAsIDApOyAgIC8vIOinkumAn+W6puOCkuOCvOODreOBq+ioreWumlxuICAgICAgICAgICAgICAgICAgICBCb2R5UGh5LmZvcmNlLnNldCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgQm9keVBoeS50b3JxdWUuc2V0KDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBHcmF2TnVtPS05MDtcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5yZXN0aXR1dGlvbiA9IDA7Ly/lj43nmbpcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDE7Ly/mkanmk6ZcbiAgICAgICAgICAgICAgICAgICAgaWYoUmVzZXROdW0+PTEwKXtSZXNldE51bT0wO31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihKdW1wQ2FuPjApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBKdW1wQ2FuKys7XG4gICAgICAgICAgICAgICAgICAgIGlmKEp1bXBDYW4+NDApe0p1bXBDYW49MDt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDA7Ly/mkanmk6ZcbiAgICAgICAgICAgICAgICBHcmF2TnVtPS05OC4yO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoSGVhZEJveC5yb3RhdGlvbi55PD0gMC4zKXtIZWFkQm94LnJvdGF0ZVkoMC4wMik7fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoQm9keVBoeS5xdWF0ZXJuaW9uLnk8PSAwLjgpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS5mb3JjZS5zZXQoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS50b3JxdWUuc2V0KDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvZHlQaHkudmVsb2NpdHkuc2V0KDAsIDAsIDApOyAgICAgICAgICAvLyDpgJ/luqbjgpLjgrzjg63jgavoqK3lrppcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb2R5UGh5LmFuZ3VsYXJWZWxvY2l0eS5zZXQoMCwgMCwgMCk7ICAgLy8g6KeS6YCf5bqm44KS44K844Ot44Gr6Kit5a6aXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgUm90TGluZSA9IEJvZHlCb3gucG9zaXRpb24ubm9ybWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBCb2R5UGh5LmFuZ3VsYXJWZWxvY2l0eS5zZXQoUm90TGluZS54LCBSb3RMaW5lLnksIFJvdExpbmUueik7IC8vQW5nbGVCdD0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoSGVhZEJveC5yb3RhdGlvbi55Pj0tMC4zKXtIZWFkQm94LnJvdGF0ZVkoLTAuMDIpO31cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEJvZHlQaHkucXVhdGVybmlvbi55Pj0tMC44KVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvZHlQaHkuZm9yY2Uuc2V0KDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvZHlQaHkudG9ycXVlLnNldCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb2R5UGh5LnZlbG9jaXR5LnNldCgwLCAwLCAwKTsgICAgICAgICAgLy8g6YCf5bqm44KS44K844Ot44Gr6Kit5a6aXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS5hbmd1bGFyVmVsb2NpdHkuc2V0KDAsIDAsIDApOyAgIC8vIOinkumAn+W6puOCkuOCvOODreOBq+ioreWumlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFJvdExpbmUgPSBCb2R5Qm94LnBvc2l0aW9uLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS5hbmd1bGFyVmVsb2NpdHkuc2V0KFJvdExpbmUueCotMSwgUm90TGluZS55Ki0xLCBSb3RMaW5lLnoqLTEpOyAvL0FuZ2xlQnQ9MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJyAmJiAoSnVtcENhbj09MCkpIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3J3YXJkID0gbmV3IENBTk5PTi5WZWMzKDAsIDAsIDgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS5xdWF0ZXJuaW9uLnZtdWx0KGZvcndhcmQsIGZvcndhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS52ZWxvY2l0eS5zZXQoZm9yd2FyZC54LCBmb3J3YXJkLnksIGZvcndhcmQueik7XG4gICAgICAgICAgICAgICAgICAgICAgICBIZWFkQm94LnJvdGF0aW9uLnk9MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKE1vdmVBbmc9PTApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMZWdMQm94LnJvdGF0ZVgoMC4wMDA1KTtMZWdSQm94LnJvdGF0ZVgoLTAuMDAwNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcm1MQm94LnJvdGF0ZVgoLTAuMDAwNSk7QXJtUkJveC5yb3RhdGVYKDAuMDAwNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihMZWdMQm94LnJvdGF0aW9uLng+PTAuNil7TW92ZUFuZz0xO31cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoTW92ZUFuZz09MSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWdMQm94LnJvdGF0ZVgoLTAuMDAwNSk7TGVnUkJveC5yb3RhdGVYKDAuMDAwNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJtTEJveC5yb3RhdGVYKDAuMDAwNSk7QXJtUkJveC5yb3RhdGVYKC0wLjAwMDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKExlZ0xCb3gucm90YXRpb24ueDw9LTAuNil7TW92ZUFuZz0wO31cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDE7Ly/mkanmk6ZcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyYXZOdW09LTk4MjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmNvZGUgPT09ICdLZXlSJyl7aWYoUmVzZXROdW09PTApe1Jlc2V0TnVtPTE7fX1cbiAgICAgICAgICAgICAgICBpZihldmVudC5jb2RlID09PSAnU3BhY2UnKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihKdW1wQ2FuPT0wKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1bXBDYW49MTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb2R5UGh5LmZvcmNlLnNldCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb2R5UGh5LnRvcnF1ZS5zZXQoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS52ZWxvY2l0eS5zZXQoMCwgMCwgMCk7ICAgICAgICAgIC8vIOmAn+W6puOCkuOCvOODreOBq+ioreWumlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvZHlQaHkuYW5ndWxhclZlbG9jaXR5LnNldCgwLCAwLCAwKTsgICAvLyDop5LpgJ/luqbjgpLjgrzjg63jgavoqK3lrppcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBVUCA9IG5ldyBDQU5OT04uVmVjMygwLCAzMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS5xdWF0ZXJuaW9uLnZtdWx0KFVQLCBVUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9keVBoeS52ZWxvY2l0eS5zZXQoVVAueCwgVVAueSwgVVAueik7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiBcbiAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDE7Ly/mkanmk6ZcbiAgICAgICAgICAgICAgICAgICAgQm9keVBoeS5hbmd1bGFyVmVsb2NpdHkuc2V0KDAsMCwwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoSnVtcENhbj09MCl7R3Jhdk51bT0tOTgyO31cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG4gICAgICAgIFxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCkgXG57XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAxMCwgMTApKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nhbm5vbi1lc19kaXN0X2Nhbm5vbi1lc19qcy1ub2RlX21vZHVsZXNfdGhyZWVfZXhhbXBsZXNfanNtX2NvbnRyb2xzX09yYi1lNThiZDJcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=