require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imageDatas = [
   {
      "fileName":"1.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"2.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"3.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"4.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"5.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"6.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"7.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"8.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"9.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"10.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"11.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"12.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"13.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"14.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"15.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   },
   {
      "fileName":"16.jpg",
      "title":"Heaven of Time",
      "desc":"Here he comes here comes Speed Racer."
   }
];

imageDatas = (function genImageURL (imageDatasArr) {
	for (var i = 0; i < imageDatasArr.length; i++) {
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}

	return imageDatasArr;
})(imageDatas);

function getRangeRandom (low, high) {
	return Math.ceil(Math.random() * (high - low) + low);
}


class ImgFigure extends React.Component {
	render() {
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL} alt={this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
	);
  }
}


let constant = {
  	centerPos:{
  		left:0,
  		right:0
  	},
  	hPosRange:{
  		leftSecX:[0,0],
  		rightSecX: [0,0],
  		y:[0,0]
  	},
  	vPosRange: {
  		x:[0,0],
  		topY:[0,0]
  	}
};

class AppComponent extends React.Component {



  componentDidMoun (argument) {
		let stageDOM = React.findDOMNode(this.refs.stage),
			stageW = stageDOM.scrollWidth,
			stageH = stageDOM.scrollheight,
			halfStageW = Math.ceil(stageW / 2),
			halfStageH = Math.ceil(stageH / 2);

		let imgFigureDOM = React.findDOMNode(this.refs.imgFigure0),
			imgW = imgFigureDOM.scrollWidth,
			imgH = imgFigureDOM.scrollHeight,
			halfImgW = Math.ceil(imgW / 2),
			halfImgH = Math.ceil(imgH / 2);

		constant.centerPos = {
			left: halfStageW - halfImgW,
			top: halfStageH - halfImgH
		}

		constant.hPosRange.leftSecX[0] = -halfImgW;
		constant.hPosRange.leftSecX[1] = halfStageW - halfImgW*3;
		constant.hPosRange.rightSecX[0] = halfStageW - halfImgW;
		constant.hPosRange.rightSecX[1] = stageW - halfImgW;
		constant.hPosRange.y[0] = -halfImgH;
		constant.hPosRange.y[1] = stageH - halfImgH;

		constant.vPosRange.topY[0] = -halfImgH;
		constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
		constant.vPosRange.x[0] = halfImgW - imgW;
		constant.vPosRange.x[1] = halfImgW ;

		this.rearrange(0);
  }

  rearrange(centerindex) {
  	let imgsArrangeArr = this.state.imgsArrangeArr,
  		centerPos = constant.centerPos,
  		hPosRange = constant.hPosRange,
  		vPosRange = constant.vPosRange,
  		hPosrangeLeftSecX = hPosRang.leftSecX,
  		hPosrangeRightSecX = hPosRang.rightSecX,
  		hPosRangeY = hPosRange.y,
  		vPosRangeTopY = vPosRange.topY,
  		vPosRangeX = vPosRange.x,

  		imgsArrangeTopArr = [],
  		topImgNum = Math.ceil(Math.random() * 2),
  		topImgSpliceindex = 0,

  		imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);

  		imgsArrangeCenterArr[0].pos = centerPos;

  		topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum ));
  		imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceindex, topImgNum);

  		imgArrangeTopArr.array.forEach( function(value, index) {
  			imgsArrangeTopArr[index].pos = {
  				top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
  				left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
  			}
  		});

  		for (var i = 0, j = imgsArrangeArr.length, k = j /2; i < j; i++) {
  			Things[i]
  		}
  }

  getInitialStage() {
  	return {
  		imgArrangeArr : [
  			{
  				pos:{
  					left:'0',
  					top:'0'
  				}
  			}
  		]
  	}
  }

  render() {

  	let controllerUnits = [];
	let	imgFigures = [];
	let _self = this;

	for (var i = 0; i < imageDatas.length; i++) {

		if(!_self.state.imgsArrangeArr[i]) {
			_self.stage.imgsArrangeArr[i] = {
				pos:{
					left:0,
					top:0
				}
			}
		}

		imgFigures.push(<ImgFigure data={imageDatas[i]} ref={'imgFigure' + [i]} />);
	}

    return (
    	<section className="stage" ref="stage">
    		<section className="img-sec">
    			{imgFigures}
    		</section>
    		<nav className="controller-nav">
    			{controllerUnits}
    		</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
