<template>
  <div id="map">
    <div id="sideLine">
      <ul class="clearfix">
        <li class="pieceBlock" :style="pieceBlockStyle(index)" v-for="(item, index) in 72" :key="index">
        </li>
      </ul>
      <ul class="clearfix">
        <li
          v-show="pieceBool(index).bool"
          :class="'piece piece' + index"
          :style="piecePosStyle(index)"
          v-for="(item, index) in 90"
          :key="index"
        >
          <div class="pieceMain">
            <span :class="pieceBool(index).item.id < 16 ? 'red' : 'black'">{{pieceBool(index).item.name}}</span>
          </div>
        </li>
      </ul>
      <ul class="pieceBlockSignArr clearfix">
        <li
          :style="signPosStyle(item.pos)"
          v-for="(item, index) in pieceBlockSignArr"
          class="sign"
          :key="index"
        >
          <div v-if="!(item.type == 3)" class="pieceBlockSignPos">
            <div v-if="!(item.type == 2)" class="pieceBlockSign pieceBlockSignLB"></div>
            <div v-if="!(item.type == 2)" class="pieceBlockSign pieceBlockSignLT"></div>
            <div v-if="!(item.type == 1)" class="pieceBlockSign pieceBlockSignRB"></div>
            <div v-if="!(item.type == 1)" class="pieceBlockSign pieceBlockSignRT"></div>
          </div>
          <div v-if="item.type == 3" class="pieceBlockSignX">
            <div class="signLine signLine1"></div>
            <div class="signLine signLine2"></div>
          </div>
        </li>
      </ul>
      <ul class="clearfix">
        <li
          v-show="pieceBool(index).bool"
          :class="'piece piece' + index"
          :style="piecePosStyle(index)"
          v-for="(item, index) in 90"
          :key="index"
          @click="pieceClick(pieceBool(index).item.id, pieceBool(index).item.index)"
        >
          <div class="pieceMain">
            <span :class="pieceBool(index).item.id < 16 ? 'red' : 'black'">{{pieceBool(index).item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MUTATION_TYPE } from "./Store/mutations.js";

export default {
  name: 'BottomMap',
  props: {
    // msg: String
  },
  data() {
    return {
      pieceBlockSignArr: [
        {
          type: 0,
          pos: [1, 2]
        },
        {
          type: 0,
          pos: [7, 2]
        },
        {
          type: 1,
          pos: [0, 3]
        },
        {
          type: 0,
          pos: [2, 3]
        },
        {
          type: 0,
          pos: [4, 3]
        },
        {
          type: 0,
          pos: [6, 3]
        },
        {
          type: 2,
          pos: [8, 3]
        },
        {
          type: 0,
          pos: [1, 7]
        },
        {
          type: 0,
          pos: [7, 7]
        },
        {
          type: 1,
          pos: [0, 6]
        },
        {
          type: 0,
          pos: [2, 6]
        },
        {
          type: 0,
          pos: [4, 6]
        },
        {
          type: 0,
          pos: [6, 6]
        },
        {
          type: 2,
          pos: [8, 6]
        },
        {
          type: 3,
          pos: [4, 1]
        },
        {
          type: 3,
          pos: [4, 8]
        }
      ]
    }
  },
  computed: {
    signPosStyle() {
      return function(pos) {
        let left = 66 * pos[0] - 27;
        let top = 66 * pos[1] - 27;
        let style = 'top:' + top + 'px; left:' + left + 'px;';
        return style;
      }
    },
    piecePosStyle() {
      return function(index) {
        let pos = this.piecePos(index, 9);
        // console.log(pos);
        let left = 66 * pos[0] - 27;
        let top = 66 * pos[1] - 27;
        let style = 'top:' + top + 'px; left:' + left + 'px;';
        return style;
      }
    },
    pieceBlockStyle() {
      return function(index) {
        let pos = this.piecePos(index, 8);
        let style = '';
        if (pos[1] == 4) {
          if (pos[0] > 0) {
            style = style + 'border-left: 3px rgba(170, 113, 8, 0) solid;'
          }
          if (pos[0] < 7) {
            style = style + 'border-right: 3px rgba(170, 113, 8, 0) solid;'
          }
        }
        return style;
      }
    },
    piecePos() {
      return function(index, num) {
        let xArr, yArr;
        if (index < num) {
          xArr = index
        } else {
          xArr = index % num
        };
        yArr = Math.floor(index / num);
        return [xArr, yArr];
      }
    },
    pieceBool() {
      return function(index) {
        let pos = this.piecePos(index, 9);
        let bool = false;
        let item = {id: 100, name: '', pos: [100, 100]};
        for(let n of this.$store.state.pieceRed) {
          if (JSON.stringify(n.pos) == JSON.stringify(pos)) {
            bool = true;
            item = n;
            break;
          }
        }
        if (!bool) {
          for(let n of this.$store.state.pieceBlack) {
            if (JSON.stringify(n.pos) == JSON.stringify(pos)) {
              bool = true;
              item = n;
              break;
            }
          }
        }
        // console.log(item);
        return {bool, item};
      }
    }
  },
  methods: {
    pieceClick(id, index) {
      this.$store.commit(MUTATION_TYPE.SETPIECEPOS,{id, index, pos:[4, 1]});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #map {
    width: 534px;
    background-color: rgb(170, 113, 8);
    margin: 10vh auto;
    padding: 30px;
    border: 3px rgb(44, 44, 44) solid;
    #sideLine {
      position: relative;
      border: 3px rgb(44, 44, 44) solid;
      .sign {
        position: absolute;
        z-index: 0;
        .pieceBlockSignX {
          position: relative;
          .signLine {
            top: -65px;
            left: 25px;
            position: absolute;
            width: 2px;
            background-color: rgb(44, 44, 44);
            border: 1px rgb(44, 44, 44) solid;
            height: 180px;
          }
          .signLine1 {
            transform: rotate(45deg);
          }
          .signLine2 {
            transform: rotate(-45deg);
          }
        }
        .pieceBlockSignPos {
          position: absolute;
          top: 16px;
          left: 16px;
          width: 20px;
          height: 20px;
          .pieceBlockSign {
            position: absolute;
            width: 15px;
            height: 15px;
          }
          .pieceBlockSignRB {
            border-right: 6px #000 solid;
            border-bottom: 6px #000 solid;
            top: -20px;
            left: -20px;
          }
          .pieceBlockSignRT {
            border-top: 6px #000 solid;
            border-right: 6px #000 solid;
            top: 20px;
            left: -20px;
          }
          .pieceBlockSignLT {
            border-left: 6px #000 solid;
            border-top: 6px #000 solid;
            top: 20px;
            left: 20px;
          }
          .pieceBlockSignLB {
            border-left: 6px #000 solid;
            border-bottom: 6px #000 solid;
            top: -20px;
            left: 20px;
          }
        }
      }
      .pieceBlock {
        position: relative;
        background-color: rgb(216, 140, 0);
        width: 60px;
        height: 60px;
        border: 3px #000 solid;
        float: left;
      }
      .piece {
        // display: none;
        position: absolute;
        z-index: 1;
        width: 50px;
        height: 50px;
        border: 2px #000 solid;
        background: rgb(228, 188, 10);
        border-radius: 50%;
        .pieceMain {
          font-size: 24px;
          margin-top: 1vh;
          font-weight: bolder;
          .red {
            color: rgb(173, 8, 8);
          }
          .black {
            color: #2c3e50;
          }
        }
      }
    }
  }
</style>
