<template>
  <div id="map">
    <div id="sideLine">
      <ul class="clearfix">
        <li class="pieceBlock" v-for="(item, index) in 72" :key="index"></li>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomMap',
  props: {
    // msg: String
  },
  data() {
      return {
          pieceRed: [
            {
              id: 0,
              name: '車',
              pos: [0, 0]
            },
            {
              id: 1,
              name: '馬',
              pos: [1, 0]
            },
            {
              id: 2,
              name: '相',
              pos: [2, 0]
            },
            {
              id: 3,
              name: '仕',
              pos: [3, 0]
            },
            {
              id: 4,
              name: '帅',
              pos: [4, 0]
            },
            {
              id: 5,
              name: '仕',
              pos: [5, 0]
            },
            {
              id: 6,
              name: '相',
              pos: [6, 0]
            },
            {
              id: 7,
              name: '馬',
              pos: [7, 0]
            },
            {
              id: 8,
              name: '車',
              pos: [8, 0]
            },
            {
              id: 9,
              name: '炮',
              pos: [1, 2]
            },
            {
              id: 10,
              name: '炮',
              pos: [7, 2]
            },
            {
              id: 11,
              name: '兵',
              pos: [0, 3]
            },
            {
              id: 12,
              name: '兵',
              pos: [2, 3]
            },
            {
              id: 13,
              name: '兵',
              pos: [4, 3]
            },
            {
              id: 14,
              name: '兵',
              pos: [6, 3]
            },
            {
              id: 15,
              name: '兵',
              pos: [8, 3]
            }
          ],
          pieceBlack: [
            {
              id: 16,
              name: '車',
              pos: [0, 9]
            },
            {
              id: 17,
              name: '馬',
              pos: [1, 9]
            },
            {
              id: 18,
              name: '象',
              pos: [2, 9]
            },
            {
              id: 19,
              name: '仕',
              pos: [3, 9]
            },
            {
              id: 20,
              name: '将',
              pos: [4, 9]
            },
            {
              id: 21,
              name: '仕',
              pos: [5, 9]
            },
            {
              id: 22,
              name: '象',
              pos: [6, 9]
            },
            {
              id: 23,
              name: '馬',
              pos: [7, 9]
            },
            {
              id: 24,
              name: '車',
              pos: [8, 9]
            },
            {
              id: 25,
              name: '炮',
              pos: [1, 7]
            },
            {
              id: 26,
              name: '炮',
              pos: [7, 7]
            },
            {
              id: 27,
              name: '卒',
              pos: [0, 6]
            },
            {
              id: 28,
              name: '卒',
              pos: [2, 6]
            },
            {
              id: 29,
              name: '卒',
              pos: [4, 6]
            },
            {
              id: 30,
              name: '卒',
              pos: [6, 6]
            },
            {
              id: 31,
              name: '卒',
              pos: [8, 6]
            }
          ]
      }
  },
  computed: {
    piecePosStyle() {
      return function(index) {
        let pos = this.piecePos(index);
        // console.log(yArr);
        let left = 66 * pos[0] - 27;
        let top = 66 * pos[1] - 27;
        return 'top:' + top + 'px; left:' + left + 'px;';
      }
    },
    piecePos() {
      return function(index) {
        let xArr, yArr;
        if (index < 9) {
          xArr = index
        } else {
          xArr = index % 9
        };
        yArr = Math.floor(index / 9);
        return [xArr, yArr];
      }
    },
    pieceBool() {
      return function(index) {
        let pos = this.piecePos(index);
        let bool = false;
        let item = {id: 100, name: '', pos: [100, 100]};
        for(let n of this.pieceRed) {
          if (JSON.stringify(n.pos) == JSON.stringify(pos)) {
            bool = true;
            item = n;
            break;
          }
        }
        if (!bool) {
          for(let n of this.pieceBlack) {
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
      .pieceBlock {
        background-color: rgb(216, 140, 0);
        width: 60px;
        height: 60px;
        border: 3px #000 solid;
        float: left;
      }
      .piece {
        top: 0;
        left: 0;
        position: absolute;
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
