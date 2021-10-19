<template>
  <div class="about">
    <!-- <div class="loadding">
        <img src="../../assets/img/load.gif">
    </div> -->

    <!-- 画布 -->
    <div id="container"></div>

    <!-- 标签 -->
    <div id="label"></div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
#label {
	width: 50%;
	height: 30%;
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

::v-deep #label div{
	width: 113px;
	height: 47px;
	line-height: 50px;
	margin-top: 10px;
	margin-left: 52px;
	text-align: center;
	background-image: url('../../assets/img/btn-bg.png');
	background-size: 100%;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
}

p {
	font-family: monospace;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	animation: widths 2s steps(13);
	color: #FFAD13;
}

@keyframes broders {
	from {
		border-right-color: #000;
	}

	to {
		border-right-color: #fff;
	}
}

@keyframes widths {
	from {
		width: 0;
	}

	to {
		width: 100%;
	}
}

.loadding {
	width: 100vw;
	height: 100vh;
	background-color: #2B2C2F;
}

.loadding img {
	width: 100%;
	height: 100%;
}
</style>