window.__ModuleLoader__.load({
	id: "dsh-dev-toolbox",
	factory: (require) => {
var __dshDevToolboxBundle = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/md5.js
  var md5_exports = {};
  __export(md5_exports, {
    md5Bytes: () => md5Bytes,
    md5FileBytes: () => md5FileBytes
  });
  function md5Bytes(data) {
    const S2 = [
      7,
      12,
      17,
      22,
      7,
      12,
      17,
      22,
      7,
      12,
      17,
      22,
      7,
      12,
      17,
      22,
      5,
      9,
      14,
      20,
      5,
      9,
      14,
      20,
      5,
      9,
      14,
      20,
      5,
      9,
      14,
      20,
      4,
      11,
      16,
      23,
      4,
      11,
      16,
      23,
      4,
      11,
      16,
      23,
      4,
      11,
      16,
      23,
      6,
      10,
      15,
      21,
      6,
      10,
      15,
      21,
      6,
      10,
      15,
      21,
      6,
      10,
      15,
      21
    ];
    const K = new Uint32Array(64);
    for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 2 ** 32);
    const withPad = (data.length + 8 >> 6) + 1 << 6;
    const buf = new Uint8Array(withPad);
    buf.set(data);
    buf[data.length] = 128;
    const dv = new DataView(buf.buffer);
    const bitLen = data.length * 8;
    dv.setUint32(withPad - 8, bitLen >>> 0, true);
    dv.setUint32(withPad - 4, Math.floor(bitLen / 2 ** 32), true);
    let a0 = 1732584193;
    let b0 = 4023233417;
    let c0 = 2562383102;
    let d0 = 271733878;
    for (let off = 0; off < withPad; off += 64) {
      const M = new Uint32Array(16);
      for (let i = 0; i < 16; i++) M[i] = dv.getUint32(off + i * 4, true);
      let A = a0;
      let B = b0;
      let C = c0;
      let D = d0;
      for (let i = 0; i < 64; i++) {
        let F;
        let g;
        if (i < 16) {
          F = B & C | ~B & D;
          g = i;
        } else if (i < 32) {
          F = D & B | ~D & C;
          g = (5 * i + 1) % 16;
        } else if (i < 48) {
          F = B ^ C ^ D;
          g = (3 * i + 5) % 16;
        } else {
          F = C ^ (B | ~D);
          g = 7 * i % 16;
        }
        F = F + A + K[i] + M[g] >>> 0;
        A = D;
        D = C;
        C = B;
        B = B + (F << S2[i] | F >>> 32 - S2[i]) >>> 0;
      }
      a0 = a0 + A >>> 0;
      b0 = b0 + B >>> 0;
      c0 = c0 + C >>> 0;
      d0 = d0 + D >>> 0;
    }
    const out = new Uint8Array(16);
    const odv = new DataView(out.buffer);
    odv.setUint32(0, a0, true);
    odv.setUint32(4, b0, true);
    odv.setUint32(8, c0, true);
    odv.setUint32(12, d0, true);
    return out;
  }
  var md5FileBytes;
  var init_md5 = __esm({
    "src/md5.js"() {
      md5FileBytes = md5Bytes;
    }
  });

  // node_modules/qrcode/lib/can-promise.js
  var require_can_promise = __commonJS({
    "node_modules/qrcode/lib/can-promise.js"(exports, module) {
      module.exports = function() {
        return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
      };
    }
  });

  // node_modules/qrcode/lib/core/utils.js
  var require_utils = __commonJS({
    "node_modules/qrcode/lib/core/utils.js"(exports) {
      var toSJISFunction;
      var CODEWORDS_COUNT = [
        0,
        // Not used
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      exports.getSymbolSize = function getSymbolSize(version) {
        if (!version) throw new Error('"version" cannot be null or undefined');
        if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
        return version * 4 + 17;
      };
      exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
        return CODEWORDS_COUNT[version];
      };
      exports.getBCHDigit = function(data) {
        let digit = 0;
        while (data !== 0) {
          digit++;
          data >>>= 1;
        }
        return digit;
      };
      exports.setToSJISFunction = function setToSJISFunction(f) {
        if (typeof f !== "function") {
          throw new Error('"toSJISFunc" is not a valid function.');
        }
        toSJISFunction = f;
      };
      exports.isKanjiModeEnabled = function() {
        return typeof toSJISFunction !== "undefined";
      };
      exports.toSJIS = function toSJIS(kanji) {
        return toSJISFunction(kanji);
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-level.js
  var require_error_correction_level = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
      exports.L = { bit: 1 };
      exports.M = { bit: 0 };
      exports.Q = { bit: 3 };
      exports.H = { bit: 2 };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "l":
          case "low":
            return exports.L;
          case "m":
          case "medium":
            return exports.M;
          case "q":
          case "quartile":
            return exports.Q;
          case "h":
          case "high":
            return exports.H;
          default:
            throw new Error("Unknown EC Level: " + string);
        }
      }
      exports.isValid = function isValid(level) {
        return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
      };
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/bit-buffer.js
  var require_bit_buffer = __commonJS({
    "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
      function BitBuffer() {
        this.buffer = [];
        this.length = 0;
      }
      BitBuffer.prototype = {
        get: function(index) {
          const bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
        },
        put: function(num, length) {
          for (let i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) === 1);
          }
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(bit) {
          const bufIndex = Math.floor(this.length / 8);
          if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
          }
          if (bit) {
            this.buffer[bufIndex] |= 128 >>> this.length % 8;
          }
          this.length++;
        }
      };
      module.exports = BitBuffer;
    }
  });

  // node_modules/qrcode/lib/core/bit-matrix.js
  var require_bit_matrix = __commonJS({
    "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
      function BitMatrix(size) {
        if (!size || size < 1) {
          throw new Error("BitMatrix size must be defined and greater than 0");
        }
        this.size = size;
        this.data = new Uint8Array(size * size);
        this.reservedBit = new Uint8Array(size * size);
      }
      BitMatrix.prototype.set = function(row, col, value, reserved) {
        const index = row * this.size + col;
        this.data[index] = value;
        if (reserved) this.reservedBit[index] = true;
      };
      BitMatrix.prototype.get = function(row, col) {
        return this.data[row * this.size + col];
      };
      BitMatrix.prototype.xor = function(row, col, value) {
        this.data[row * this.size + col] ^= value;
      };
      BitMatrix.prototype.isReserved = function(row, col) {
        return this.reservedBit[row * this.size + col];
      };
      module.exports = BitMatrix;
    }
  });

  // node_modules/qrcode/lib/core/alignment-pattern.js
  var require_alignment_pattern = __commonJS({
    "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1) return [];
        const posCount = Math.floor(version / 7) + 2;
        const size = getSymbolSize(version);
        const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        const positions = [size - 7];
        for (let i = 1; i < posCount - 1; i++) {
          positions[i] = positions[i - 1] - intervals;
        }
        positions.push(6);
        return positions.reverse();
      };
      exports.getPositions = function getPositions(version) {
        const coords = [];
        const pos = exports.getRowColCoords(version);
        const posLength = pos.length;
        for (let i = 0; i < posLength; i++) {
          for (let j = 0; j < posLength; j++) {
            if (i === 0 && j === 0 || // top-left
            i === 0 && j === posLength - 1 || // bottom-left
            i === posLength - 1 && j === 0) {
              continue;
            }
            coords.push([pos[i], pos[j]]);
          }
        }
        return coords;
      };
    }
  });

  // node_modules/qrcode/lib/core/finder-pattern.js
  var require_finder_pattern = __commonJS({
    "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      var FINDER_PATTERN_SIZE = 7;
      exports.getPositions = function getPositions(version) {
        const size = getSymbolSize(version);
        return [
          // top-left
          [0, 0],
          // top-right
          [size - FINDER_PATTERN_SIZE, 0],
          // bottom-left
          [0, size - FINDER_PATTERN_SIZE]
        ];
      };
    }
  });

  // node_modules/qrcode/lib/core/mask-pattern.js
  var require_mask_pattern = __commonJS({
    "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
      exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
      };
      exports.isValid = function isValid(mask) {
        return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
      };
      exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : void 0;
      };
      exports.getPenaltyN1 = function getPenaltyN1(data) {
        const size = data.size;
        let points = 0;
        let sameCountCol = 0;
        let sameCountRow = 0;
        let lastCol = null;
        let lastRow = null;
        for (let row = 0; row < size; row++) {
          sameCountCol = sameCountRow = 0;
          lastCol = lastRow = null;
          for (let col = 0; col < size; col++) {
            let module2 = data.get(row, col);
            if (module2 === lastCol) {
              sameCountCol++;
            } else {
              if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
              lastCol = module2;
              sameCountCol = 1;
            }
            module2 = data.get(col, row);
            if (module2 === lastRow) {
              sameCountRow++;
            } else {
              if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
              lastRow = module2;
              sameCountRow = 1;
            }
          }
          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        }
        return points;
      };
      exports.getPenaltyN2 = function getPenaltyN2(data) {
        const size = data.size;
        let points = 0;
        for (let row = 0; row < size - 1; row++) {
          for (let col = 0; col < size - 1; col++) {
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
          }
        }
        return points * PenaltyScores.N2;
      };
      exports.getPenaltyN3 = function getPenaltyN3(data) {
        const size = data.size;
        let points = 0;
        let bitsCol = 0;
        let bitsRow = 0;
        for (let row = 0; row < size; row++) {
          bitsCol = bitsRow = 0;
          for (let col = 0; col < size; col++) {
            bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
            if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
            bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
            if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
          }
        }
        return points * PenaltyScores.N3;
      };
      exports.getPenaltyN4 = function getPenaltyN4(data) {
        let darkCount = 0;
        const modulesCount = data.data.length;
        for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
        const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
        return k * PenaltyScores.N4;
      };
      function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
          case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
          case exports.Patterns.PATTERN001:
            return i % 2 === 0;
          case exports.Patterns.PATTERN010:
            return j % 3 === 0;
          case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
          case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
          case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
          case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
          case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      }
      exports.applyMask = function applyMask(pattern, data) {
        const size = data.size;
        for (let col = 0; col < size; col++) {
          for (let row = 0; row < size; row++) {
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
          }
        }
      };
      exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        const numPatterns = Object.keys(exports.Patterns).length;
        let bestPattern = 0;
        let lowerPenalty = Infinity;
        for (let p = 0; p < numPatterns; p++) {
          setupFormatFunc(p);
          exports.applyMask(p, data);
          const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
          exports.applyMask(p, data);
          if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
          }
        }
        return bestPattern;
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-code.js
  var require_error_correction_code = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
      var ECLevel = require_error_correction_level();
      var EC_BLOCKS_TABLE = [
        // L  M  Q  H
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ];
      var EC_CODEWORDS_TABLE = [
        // L  M  Q  H
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
      exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/galois-field.js
  var require_galois_field = __commonJS({
    "node_modules/qrcode/lib/core/galois-field.js"(exports) {
      var EXP_TABLE = new Uint8Array(512);
      var LOG_TABLE = new Uint8Array(256);
      (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          EXP_TABLE[i] = x;
          LOG_TABLE[x] = i;
          x <<= 1;
          if (x & 256) {
            x ^= 285;
          }
        }
        for (let i = 255; i < 512; i++) {
          EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
      })();
      exports.log = function log(n) {
        if (n < 1) throw new Error("log(" + n + ")");
        return LOG_TABLE[n];
      };
      exports.exp = function exp(n) {
        return EXP_TABLE[n];
      };
      exports.mul = function mul(x, y) {
        if (x === 0 || y === 0) return 0;
        return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
      };
    }
  });

  // node_modules/qrcode/lib/core/polynomial.js
  var require_polynomial = __commonJS({
    "node_modules/qrcode/lib/core/polynomial.js"(exports) {
      var GF = require_galois_field();
      exports.mul = function mul(p1, p2) {
        const coeff = new Uint8Array(p1.length + p2.length - 1);
        for (let i = 0; i < p1.length; i++) {
          for (let j = 0; j < p2.length; j++) {
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
          }
        }
        return coeff;
      };
      exports.mod = function mod(divident, divisor) {
        let result = new Uint8Array(divident);
        while (result.length - divisor.length >= 0) {
          const coeff = result[0];
          for (let i = 0; i < divisor.length; i++) {
            result[i] ^= GF.mul(divisor[i], coeff);
          }
          let offset = 0;
          while (offset < result.length && result[offset] === 0) offset++;
          result = result.slice(offset);
        }
        return result;
      };
      exports.generateECPolynomial = function generateECPolynomial(degree) {
        let poly = new Uint8Array([1]);
        for (let i = 0; i < degree; i++) {
          poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
        }
        return poly;
      };
    }
  });

  // node_modules/qrcode/lib/core/reed-solomon-encoder.js
  var require_reed_solomon_encoder = __commonJS({
    "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
      var Polynomial = require_polynomial();
      function ReedSolomonEncoder(degree) {
        this.genPoly = void 0;
        this.degree = degree;
        if (this.degree) this.initialize(this.degree);
      }
      ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
        this.degree = degree;
        this.genPoly = Polynomial.generateECPolynomial(this.degree);
      };
      ReedSolomonEncoder.prototype.encode = function encode(data) {
        if (!this.genPoly) {
          throw new Error("Encoder not initialized");
        }
        const paddedData = new Uint8Array(data.length + this.degree);
        paddedData.set(data);
        const remainder = Polynomial.mod(paddedData, this.genPoly);
        const start = this.degree - remainder.length;
        if (start > 0) {
          const buff = new Uint8Array(this.degree);
          buff.set(remainder, start);
          return buff;
        }
        return remainder;
      };
      module.exports = ReedSolomonEncoder;
    }
  });

  // node_modules/qrcode/lib/core/version-check.js
  var require_version_check = __commonJS({
    "node_modules/qrcode/lib/core/version-check.js"(exports) {
      exports.isValid = function isValid(version) {
        return !isNaN(version) && version >= 1 && version <= 40;
      };
    }
  });

  // node_modules/qrcode/lib/core/regex.js
  var require_regex = __commonJS({
    "node_modules/qrcode/lib/core/regex.js"(exports) {
      var numeric = "[0-9]+";
      var alphanumeric = "[A-Z $%*+\\-./:]+";
      var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      kanji = kanji.replace(/u/g, "\\u");
      var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
      exports.KANJI = new RegExp(kanji, "g");
      exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      exports.BYTE = new RegExp(byte, "g");
      exports.NUMERIC = new RegExp(numeric, "g");
      exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
      var TEST_KANJI = new RegExp("^" + kanji + "$");
      var TEST_NUMERIC = new RegExp("^" + numeric + "$");
      var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      exports.testKanji = function testKanji(str) {
        return TEST_KANJI.test(str);
      };
      exports.testNumeric = function testNumeric(str) {
        return TEST_NUMERIC.test(str);
      };
      exports.testAlphanumeric = function testAlphanumeric(str) {
        return TEST_ALPHANUMERIC.test(str);
      };
    }
  });

  // node_modules/qrcode/lib/core/mode.js
  var require_mode = __commonJS({
    "node_modules/qrcode/lib/core/mode.js"(exports) {
      var VersionCheck = require_version_check();
      var Regex = require_regex();
      exports.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14]
      };
      exports.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13]
      };
      exports.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16]
      };
      exports.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12]
      };
      exports.MIXED = {
        bit: -1
      };
      exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid version: " + version);
        }
        if (version >= 1 && version < 10) return mode.ccBits[0];
        else if (version < 27) return mode.ccBits[1];
        return mode.ccBits[2];
      };
      exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
        else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
        else if (Regex.testKanji(dataStr)) return exports.KANJI;
        else return exports.BYTE;
      };
      exports.toString = function toString(mode) {
        if (mode && mode.id) return mode.id;
        throw new Error("Invalid mode");
      };
      exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
      };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "numeric":
            return exports.NUMERIC;
          case "alphanumeric":
            return exports.ALPHANUMERIC;
          case "kanji":
            return exports.KANJI;
          case "byte":
            return exports.BYTE;
          default:
            throw new Error("Unknown mode: " + string);
        }
      }
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/version.js
  var require_version = __commonJS({
    "node_modules/qrcode/lib/core/version.js"(exports) {
      var Utils = require_utils();
      var ECCode = require_error_correction_code();
      var ECLevel = require_error_correction_level();
      var Mode = require_mode();
      var VersionCheck = require_version_check();
      var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
      var G18_BCH = Utils.getBCHDigit(G18);
      function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      function getReservedBitsCount(mode, version) {
        return Mode.getCharCountIndicator(mode, version) + 4;
      }
      function getTotalBitsFromDataArray(segments, version) {
        let totalBits = 0;
        segments.forEach(function(data) {
          const reservedBits = getReservedBitsCount(data.mode, version);
          totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
      }
      function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          const length = getTotalBitsFromDataArray(segments, currentVersion);
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      exports.from = function from(value, defaultValue) {
        if (VersionCheck.isValid(value)) {
          return parseInt(value, 10);
        }
        return defaultValue;
      };
      exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid QR Code version");
        }
        if (typeof mode === "undefined") mode = Mode.BYTE;
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode === Mode.MIXED) return dataTotalCodewordsBits;
        const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
        switch (mode) {
          case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
          case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
          case Mode.KANJI:
            return Math.floor(usableBits / 13);
          case Mode.BYTE:
          default:
            return Math.floor(usableBits / 8);
        }
      };
      exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
        let seg;
        const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
        if (Array.isArray(data)) {
          if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
          }
          if (data.length === 0) {
            return 1;
          }
          seg = data[0];
        } else {
          seg = data;
        }
        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
      };
      exports.getEncodedBits = function getEncodedBits(version) {
        if (!VersionCheck.isValid(version) || version < 7) {
          throw new Error("Invalid QR Code version");
        }
        let d = version << 12;
        while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
          d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
        }
        return version << 12 | d;
      };
    }
  });

  // node_modules/qrcode/lib/core/format-info.js
  var require_format_info = __commonJS({
    "node_modules/qrcode/lib/core/format-info.js"(exports) {
      var Utils = require_utils();
      var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
      var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
      var G15_BCH = Utils.getBCHDigit(G15);
      exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
        const data = errorCorrectionLevel.bit << 3 | mask;
        let d = data << 10;
        while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
          d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
        }
        return (data << 10 | d) ^ G15_MASK;
      };
    }
  });

  // node_modules/qrcode/lib/core/numeric-data.js
  var require_numeric_data = __commonJS({
    "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
      var Mode = require_mode();
      function NumericData(data) {
        this.mode = Mode.NUMERIC;
        this.data = data.toString();
      }
      NumericData.getBitsLength = function getBitsLength(length) {
        return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
      };
      NumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      NumericData.prototype.getBitsLength = function getBitsLength() {
        return NumericData.getBitsLength(this.data.length);
      };
      NumericData.prototype.write = function write(bitBuffer) {
        let i, group, value;
        for (i = 0; i + 3 <= this.data.length; i += 3) {
          group = this.data.substr(i, 3);
          value = parseInt(group, 10);
          bitBuffer.put(value, 10);
        }
        const remainingNum = this.data.length - i;
        if (remainingNum > 0) {
          group = this.data.substr(i);
          value = parseInt(group, 10);
          bitBuffer.put(value, remainingNum * 3 + 1);
        }
      };
      module.exports = NumericData;
    }
  });

  // node_modules/qrcode/lib/core/alphanumeric-data.js
  var require_alphanumeric_data = __commonJS({
    "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
      var Mode = require_mode();
      var ALPHA_NUM_CHARS = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function AlphanumericData(data) {
        this.mode = Mode.ALPHANUMERIC;
        this.data = data;
      }
      AlphanumericData.getBitsLength = function getBitsLength(length) {
        return 11 * Math.floor(length / 2) + 6 * (length % 2);
      };
      AlphanumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      AlphanumericData.prototype.getBitsLength = function getBitsLength() {
        return AlphanumericData.getBitsLength(this.data.length);
      };
      AlphanumericData.prototype.write = function write(bitBuffer) {
        let i;
        for (i = 0; i + 2 <= this.data.length; i += 2) {
          let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
          value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
          bitBuffer.put(value, 11);
        }
        if (this.data.length % 2) {
          bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
        }
      };
      module.exports = AlphanumericData;
    }
  });

  // node_modules/qrcode/lib/core/byte-data.js
  var require_byte_data = __commonJS({
    "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
      var Mode = require_mode();
      function ByteData(data) {
        this.mode = Mode.BYTE;
        if (typeof data === "string") {
          this.data = new TextEncoder().encode(data);
        } else {
          this.data = new Uint8Array(data);
        }
      }
      ByteData.getBitsLength = function getBitsLength(length) {
        return length * 8;
      };
      ByteData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      ByteData.prototype.getBitsLength = function getBitsLength() {
        return ByteData.getBitsLength(this.data.length);
      };
      ByteData.prototype.write = function(bitBuffer) {
        for (let i = 0, l = this.data.length; i < l; i++) {
          bitBuffer.put(this.data[i], 8);
        }
      };
      module.exports = ByteData;
    }
  });

  // node_modules/qrcode/lib/core/kanji-data.js
  var require_kanji_data = __commonJS({
    "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
      var Mode = require_mode();
      var Utils = require_utils();
      function KanjiData(data) {
        this.mode = Mode.KANJI;
        this.data = data;
      }
      KanjiData.getBitsLength = function getBitsLength(length) {
        return length * 13;
      };
      KanjiData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      KanjiData.prototype.getBitsLength = function getBitsLength() {
        return KanjiData.getBitsLength(this.data.length);
      };
      KanjiData.prototype.write = function(bitBuffer) {
        let i;
        for (i = 0; i < this.data.length; i++) {
          let value = Utils.toSJIS(this.data[i]);
          if (value >= 33088 && value <= 40956) {
            value -= 33088;
          } else if (value >= 57408 && value <= 60351) {
            value -= 49472;
          } else {
            throw new Error(
              "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
            );
          }
          value = (value >>> 8 & 255) * 192 + (value & 255);
          bitBuffer.put(value, 13);
        }
      };
      module.exports = KanjiData;
    }
  });

  // node_modules/dijkstrajs/dijkstra.js
  var require_dijkstra = __commonJS({
    "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
      "use strict";
      var dijkstra = {
        single_source_shortest_paths: function(graph, s, d) {
          var predecessors = {};
          var costs = {};
          costs[s] = 0;
          var open = dijkstra.PriorityQueue.make();
          open.push(s, 0);
          var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
          while (!open.empty()) {
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            adjacent_nodes = graph[u] || {};
            for (v in adjacent_nodes) {
              if (adjacent_nodes.hasOwnProperty(v)) {
                cost_of_e = adjacent_nodes[v];
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                  costs[v] = cost_of_s_to_u_plus_cost_of_e;
                  open.push(v, cost_of_s_to_u_plus_cost_of_e);
                  predecessors[v] = u;
                }
              }
            }
          }
          if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
            throw new Error(msg);
          }
          return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function(predecessors, d) {
          var nodes = [];
          var u = d;
          var predecessor;
          while (u) {
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
          }
          nodes.reverse();
          return nodes;
        },
        find_path: function(graph, s, d) {
          var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
          return dijkstra.extract_shortest_path_from_predecessor_list(
            predecessors,
            d
          );
        },
        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
          make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for (key in T) {
              if (T.hasOwnProperty(key)) {
                t[key] = T[key];
              }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
          },
          default_sorter: function(a, b) {
            return a.cost - b.cost;
          },
          /**
           * Add a new item to the queue and ensure the highest priority element
           * is at the front of the queue.
           */
          push: function(value, cost) {
            var item = { value, cost };
            this.queue.push(item);
            this.queue.sort(this.sorter);
          },
          /**
           * Return the highest priority element in the queue.
           */
          pop: function() {
            return this.queue.shift();
          },
          empty: function() {
            return this.queue.length === 0;
          }
        }
      };
      if (typeof module !== "undefined") {
        module.exports = dijkstra;
      }
    }
  });

  // node_modules/qrcode/lib/core/segments.js
  var require_segments = __commonJS({
    "node_modules/qrcode/lib/core/segments.js"(exports) {
      var Mode = require_mode();
      var NumericData = require_numeric_data();
      var AlphanumericData = require_alphanumeric_data();
      var ByteData = require_byte_data();
      var KanjiData = require_kanji_data();
      var Regex = require_regex();
      var Utils = require_utils();
      var dijkstra = require_dijkstra();
      function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
      }
      function getSegments(regex, mode, str) {
        const segments = [];
        let result;
        while ((result = regex.exec(str)) !== null) {
          segments.push({
            data: result[0],
            index: result.index,
            mode,
            length: result[0].length
          });
        }
        return segments;
      }
      function getSegmentsFromString(dataStr) {
        const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
        const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
        let byteSegs;
        let kanjiSegs;
        if (Utils.isKanjiModeEnabled()) {
          byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
          kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
        } else {
          byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
          kanjiSegs = [];
        }
        const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs.sort(function(s1, s2) {
          return s1.index - s2.index;
        }).map(function(obj) {
          return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
          };
        });
      }
      function getSegmentBitsLength(length, mode) {
        switch (mode) {
          case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
          case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
          case Mode.KANJI:
            return KanjiData.getBitsLength(length);
          case Mode.BYTE:
            return ByteData.getBitsLength(length);
        }
      }
      function mergeSegments(segs) {
        return segs.reduce(function(acc, curr) {
          const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
          if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
          }
          acc.push(curr);
          return acc;
        }, []);
      }
      function buildNodes(segs) {
        const nodes = [];
        for (let i = 0; i < segs.length; i++) {
          const seg = segs[i];
          switch (seg.mode) {
            case Mode.NUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.ALPHANUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.KANJI:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
              break;
            case Mode.BYTE:
              nodes.push([
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
          }
        }
        return nodes;
      }
      function buildGraph(nodes, version) {
        const table = {};
        const graph = { start: {} };
        let prevNodeIds = ["start"];
        for (let i = 0; i < nodes.length; i++) {
          const nodeGroup = nodes[i];
          const currentNodeIds = [];
          for (let j = 0; j < nodeGroup.length; j++) {
            const node = nodeGroup[j];
            const key = "" + i + j;
            currentNodeIds.push(key);
            table[key] = { node, lastCount: 0 };
            graph[key] = {};
            for (let n = 0; n < prevNodeIds.length; n++) {
              const prevNodeId = prevNodeIds[n];
              if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                table[prevNodeId].lastCount += node.length;
              } else {
                if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
              }
            }
          }
          prevNodeIds = currentNodeIds;
        }
        for (let n = 0; n < prevNodeIds.length; n++) {
          graph[prevNodeIds[n]].end = 0;
        }
        return { map: graph, table };
      }
      function buildSingleSegment(data, modesHint) {
        let mode;
        const bestMode = Mode.getBestModeForData(data);
        mode = Mode.from(modesHint, bestMode);
        if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
          throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
        }
        if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
          mode = Mode.BYTE;
        }
        switch (mode) {
          case Mode.NUMERIC:
            return new NumericData(data);
          case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
          case Mode.KANJI:
            return new KanjiData(data);
          case Mode.BYTE:
            return new ByteData(data);
        }
      }
      exports.fromArray = function fromArray(array) {
        return array.reduce(function(acc, seg) {
          if (typeof seg === "string") {
            acc.push(buildSingleSegment(seg, null));
          } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
          }
          return acc;
        }, []);
      };
      exports.fromString = function fromString(data, version) {
        const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
        const nodes = buildNodes(segs);
        const graph = buildGraph(nodes, version);
        const path = dijkstra.find_path(graph.map, "start", "end");
        const optimizedSegs = [];
        for (let i = 1; i < path.length - 1; i++) {
          optimizedSegs.push(graph.table[path[i]].node);
        }
        return exports.fromArray(mergeSegments(optimizedSegs));
      };
      exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(
          getSegmentsFromString(data, Utils.isKanjiModeEnabled())
        );
      };
    }
  });

  // node_modules/qrcode/lib/core/qrcode.js
  var require_qrcode = __commonJS({
    "node_modules/qrcode/lib/core/qrcode.js"(exports) {
      var Utils = require_utils();
      var ECLevel = require_error_correction_level();
      var BitBuffer = require_bit_buffer();
      var BitMatrix = require_bit_matrix();
      var AlignmentPattern = require_alignment_pattern();
      var FinderPattern = require_finder_pattern();
      var MaskPattern = require_mask_pattern();
      var ECCode = require_error_correction_code();
      var ReedSolomonEncoder = require_reed_solomon_encoder();
      var Version = require_version();
      var FormatInfo = require_format_info();
      var Mode = require_mode();
      var Segments = require_segments();
      function setupFinderPattern(matrix, version) {
        const size = matrix.size;
        const pos = FinderPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r) continue;
            for (let c = -1; c <= 7; c++) {
              if (col + c <= -1 || size <= col + c) continue;
              if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupTimingPattern(matrix) {
        const size = matrix.size;
        for (let r = 8; r < size - 8; r++) {
          const value = r % 2 === 0;
          matrix.set(r, 6, value, true);
          matrix.set(6, r, value, true);
        }
      }
      function setupAlignmentPattern(matrix, version) {
        const pos = AlignmentPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -2; r <= 2; r++) {
            for (let c = -2; c <= 2; c++) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupVersionInfo(matrix, version) {
        const size = matrix.size;
        const bits = Version.getEncodedBits(version);
        let row, col, mod;
        for (let i = 0; i < 18; i++) {
          row = Math.floor(i / 3);
          col = i % 3 + size - 8 - 3;
          mod = (bits >> i & 1) === 1;
          matrix.set(row, col, mod, true);
          matrix.set(col, row, mod, true);
        }
      }
      function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
        const size = matrix.size;
        const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
        let i, mod;
        for (i = 0; i < 15; i++) {
          mod = (bits >> i & 1) === 1;
          if (i < 6) {
            matrix.set(i, 8, mod, true);
          } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
          } else {
            matrix.set(size - 15 + i, 8, mod, true);
          }
          if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
          } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
          } else {
            matrix.set(8, 15 - i - 1, mod, true);
          }
        }
        matrix.set(size - 8, 8, 1, true);
      }
      function setupData(matrix, data) {
        const size = matrix.size;
        let inc = -1;
        let row = size - 1;
        let bitIndex = 7;
        let byteIndex = 0;
        for (let col = size - 1; col > 0; col -= 2) {
          if (col === 6) col--;
          while (true) {
            for (let c = 0; c < 2; c++) {
              if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                }
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }
            row += inc;
            if (row < 0 || size <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
      function createData(version, errorCorrectionLevel, segments) {
        const buffer = new BitBuffer();
        segments.forEach(function(data) {
          buffer.put(data.mode.bit, 4);
          buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
          data.write(buffer);
        });
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
          buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 !== 0) {
          buffer.putBit(0);
        }
        const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
        for (let i = 0; i < remainingByte; i++) {
          buffer.put(i % 2 ? 17 : 236, 8);
        }
        return createCodewords(buffer, version, errorCorrectionLevel);
      }
      function createCodewords(bitBuffer, version, errorCorrectionLevel) {
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewords = totalCodewords - ecTotalCodewords;
        const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
        const blocksInGroup2 = totalCodewords % ecTotalBlocks;
        const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
        const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
        const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
        const rs = new ReedSolomonEncoder(ecCount);
        let offset = 0;
        const dcData = new Array(ecTotalBlocks);
        const ecData = new Array(ecTotalBlocks);
        let maxDataSize = 0;
        const buffer = new Uint8Array(bitBuffer.buffer);
        for (let b = 0; b < ecTotalBlocks; b++) {
          const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
          dcData[b] = buffer.slice(offset, offset + dataSize);
          ecData[b] = rs.encode(dcData[b]);
          offset += dataSize;
          maxDataSize = Math.max(maxDataSize, dataSize);
        }
        const data = new Uint8Array(totalCodewords);
        let index = 0;
        let i, r;
        for (i = 0; i < maxDataSize; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
              data[index++] = dcData[r][i];
            }
          }
        }
        for (i = 0; i < ecCount; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
          }
        }
        return data;
      }
      function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
        let segments;
        if (Array.isArray(data)) {
          segments = Segments.fromArray(data);
        } else if (typeof data === "string") {
          let estimatedVersion = version;
          if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
          }
          segments = Segments.fromString(data, estimatedVersion || 40);
        } else {
          throw new Error("Invalid data");
        }
        const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
        if (!bestVersion) {
          throw new Error("The amount of data is too big to be stored in a QR Code");
        }
        if (!version) {
          version = bestVersion;
        } else if (version < bestVersion) {
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
          );
        }
        const dataBits = createData(version, errorCorrectionLevel, segments);
        const moduleCount = Utils.getSymbolSize(version);
        const modules = new BitMatrix(moduleCount);
        setupFinderPattern(modules, version);
        setupTimingPattern(modules);
        setupAlignmentPattern(modules, version);
        setupFormatInfo(modules, errorCorrectionLevel, 0);
        if (version >= 7) {
          setupVersionInfo(modules, version);
        }
        setupData(modules, dataBits);
        if (isNaN(maskPattern)) {
          maskPattern = MaskPattern.getBestMask(
            modules,
            setupFormatInfo.bind(null, modules, errorCorrectionLevel)
          );
        }
        MaskPattern.applyMask(maskPattern, modules);
        setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
        return {
          modules,
          version,
          errorCorrectionLevel,
          maskPattern,
          segments
        };
      }
      exports.create = function create(data, options) {
        if (typeof data === "undefined" || data === "") {
          throw new Error("No input text");
        }
        let errorCorrectionLevel = ECLevel.M;
        let version;
        let mask;
        if (typeof options !== "undefined") {
          errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
          version = Version.from(options.version);
          mask = MaskPattern.from(options.maskPattern);
          if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
          }
        }
        return createSymbol(data, version, errorCorrectionLevel, mask);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/utils.js
  var require_utils2 = __commonJS({
    "node_modules/qrcode/lib/renderer/utils.js"(exports) {
      function hex2rgba(hex) {
        if (typeof hex === "number") {
          hex = hex.toString();
        }
        if (typeof hex !== "string") {
          throw new Error("Color should be defined as hex string");
        }
        let hexCode = hex.slice().replace("#", "").split("");
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
          throw new Error("Invalid hex color: " + hex);
        }
        if (hexCode.length === 3 || hexCode.length === 4) {
          hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
            return [c, c];
          }));
        }
        if (hexCode.length === 6) hexCode.push("F", "F");
        const hexValue = parseInt(hexCode.join(""), 16);
        return {
          r: hexValue >> 24 & 255,
          g: hexValue >> 16 & 255,
          b: hexValue >> 8 & 255,
          a: hexValue & 255,
          hex: "#" + hexCode.slice(0, 6).join("")
        };
      }
      exports.getOptions = function getOptions(options) {
        if (!options) options = {};
        if (!options.color) options.color = {};
        const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
        const width = options.width && options.width >= 21 ? options.width : void 0;
        const scale = options.scale || 4;
        return {
          width,
          scale: width ? 4 : scale,
          margin,
          color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff")
          },
          type: options.type,
          rendererOpts: options.rendererOpts || {}
        };
      };
      exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
      };
      exports.getImageWidth = function getImageWidth(qrSize, opts) {
        const scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
      };
      exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        const size = qr.modules.size;
        const data = qr.modules.data;
        const scale = exports.getScale(size, opts);
        const symbolSize = Math.floor((size + opts.margin * 2) * scale);
        const scaledMargin = opts.margin * scale;
        const palette = [opts.color.light, opts.color.dark];
        for (let i = 0; i < symbolSize; i++) {
          for (let j = 0; j < symbolSize; j++) {
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
              const iSrc = Math.floor((i - scaledMargin) / scale);
              const jSrc = Math.floor((j - scaledMargin) / scale);
              pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
          }
        }
      };
    }
  });

  // node_modules/qrcode/lib/renderer/canvas.js
  var require_canvas = __commonJS({
    "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
      var Utils = require_utils2();
      function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style) canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + "px";
        canvas.style.width = size + "px";
      }
      function getCanvasElement() {
        try {
          return document.createElement("canvas");
        } catch (e) {
          throw new Error("You need to specify a canvas element");
        }
      }
      exports.render = function render(qrData, canvas, options) {
        let opts = options;
        let canvasEl = canvas;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!canvas) {
          canvasEl = getCanvasElement();
        }
        opts = Utils.getOptions(opts);
        const size = Utils.getImageWidth(qrData.modules.size, opts);
        const ctx = canvasEl.getContext("2d");
        const image = ctx.createImageData(size, size);
        Utils.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
      };
      exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        let opts = options;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!opts) opts = {};
        const canvasEl = exports.render(qrData, canvas, opts);
        const type = opts.type || "image/png";
        const rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/svg-tag.js
  var require_svg_tag = __commonJS({
    "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
      var Utils = require_utils2();
      function getColorAttrib(color, attrib) {
        const alpha = color.a / 255;
        const str = attrib + '="' + color.hex + '"';
        return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
      }
      function svgCmd(cmd, x, y) {
        let str = cmd + x;
        if (typeof y !== "undefined") str += " " + y;
        return str;
      }
      function qrToPath(data, size, margin) {
        let path = "";
        let moveBy = 0;
        let newRow = false;
        let lineLength = 0;
        for (let i = 0; i < data.length; i++) {
          const col = Math.floor(i % size);
          const row = Math.floor(i / size);
          if (!col && !newRow) newRow = true;
          if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
              path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
              moveBy = 0;
              newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
              path += svgCmd("h", lineLength);
              lineLength = 0;
            }
          } else {
            moveBy++;
          }
        }
        return path;
      }
      exports.render = function render(qrData, options, cb) {
        const opts = Utils.getOptions(options);
        const size = qrData.modules.size;
        const data = qrData.modules.data;
        const qrcodesize = size + opts.margin * 2;
        const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
        const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
        const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
        const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
        const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
        if (typeof cb === "function") {
          cb(null, svgTag);
        }
        return svgTag;
      };
    }
  });

  // node_modules/qrcode/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/qrcode/lib/browser.js"(exports) {
      var canPromise = require_can_promise();
      var QRCode2 = require_qrcode();
      var CanvasRenderer = require_canvas();
      var SvgRenderer = require_svg_tag();
      function renderCanvas(renderFunc, canvas, text, opts, cb) {
        const args = [].slice.call(arguments, 1);
        const argsNum = args.length;
        const isLastArgCb = typeof args[argsNum - 1] === "function";
        if (!isLastArgCb && !canPromise()) {
          throw new Error("Callback required as last argument");
        }
        if (isLastArgCb) {
          if (argsNum < 2) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
              cb = opts;
              opts = void 0;
            } else {
              cb = opts;
              opts = text;
              text = canvas;
              canvas = void 0;
            }
          }
        } else {
          if (argsNum < 1) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 1) {
            text = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = void 0;
          }
          return new Promise(function(resolve, reject) {
            try {
              const data = QRCode2.create(text, opts);
              resolve(renderFunc(data, canvas, opts));
            } catch (e) {
              reject(e);
            }
          });
        }
        try {
          const data = QRCode2.create(text, opts);
          cb(null, renderFunc(data, canvas, opts));
        } catch (e) {
          cb(e);
        }
      }
      exports.create = QRCode2.create;
      exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
      exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
      exports.toString = renderCanvas.bind(null, function(data, _, opts) {
        return SvgRenderer.render(data, opts);
      });
    }
  });

  // node_modules/js-beautify/js/src/core/output.js
  var require_output = __commonJS({
    "node_modules/js-beautify/js/src/core/output.js"(exports, module) {
      "use strict";
      function OutputLine(parent) {
        this.__parent = parent;
        this.__character_count = 0;
        this.__indent_count = -1;
        this.__alignment_count = 0;
        this.__wrap_point_index = 0;
        this.__wrap_point_character_count = 0;
        this.__wrap_point_indent_count = -1;
        this.__wrap_point_alignment_count = 0;
        this.__items = [];
      }
      OutputLine.prototype.clone_empty = function() {
        var line = new OutputLine(this.__parent);
        line.set_indent(this.__indent_count, this.__alignment_count);
        return line;
      };
      OutputLine.prototype.item = function(index) {
        if (index < 0) {
          return this.__items[this.__items.length + index];
        } else {
          return this.__items[index];
        }
      };
      OutputLine.prototype.has_match = function(pattern) {
        for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
          if (this.__items[lastCheckedOutput].match(pattern)) {
            return true;
          }
        }
        return false;
      };
      OutputLine.prototype.set_indent = function(indent, alignment) {
        if (this.is_empty()) {
          this.__indent_count = indent || 0;
          this.__alignment_count = alignment || 0;
          this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
        }
      };
      OutputLine.prototype._set_wrap_point = function() {
        if (this.__parent.wrap_line_length) {
          this.__wrap_point_index = this.__items.length;
          this.__wrap_point_character_count = this.__character_count;
          this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
          this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
        }
      };
      OutputLine.prototype._should_wrap = function() {
        return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
      };
      OutputLine.prototype._allow_wrap = function() {
        if (this._should_wrap()) {
          this.__parent.add_new_line();
          var next = this.__parent.current_line;
          next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
          next.__items = this.__items.slice(this.__wrap_point_index);
          this.__items = this.__items.slice(0, this.__wrap_point_index);
          next.__character_count += this.__character_count - this.__wrap_point_character_count;
          this.__character_count = this.__wrap_point_character_count;
          if (next.__items[0] === " ") {
            next.__items.splice(0, 1);
            next.__character_count -= 1;
          }
          return true;
        }
        return false;
      };
      OutputLine.prototype.is_empty = function() {
        return this.__items.length === 0;
      };
      OutputLine.prototype.last = function() {
        if (!this.is_empty()) {
          return this.__items[this.__items.length - 1];
        } else {
          return null;
        }
      };
      OutputLine.prototype.push = function(item) {
        this.__items.push(item);
        var last_newline_index = item.lastIndexOf("\n");
        if (last_newline_index !== -1) {
          this.__character_count = item.length - last_newline_index;
        } else {
          this.__character_count += item.length;
        }
      };
      OutputLine.prototype.pop = function() {
        var item = null;
        if (!this.is_empty()) {
          item = this.__items.pop();
          this.__character_count -= item.length;
        }
        return item;
      };
      OutputLine.prototype._remove_indent = function() {
        if (this.__indent_count > 0) {
          this.__indent_count -= 1;
          this.__character_count -= this.__parent.indent_size;
        }
      };
      OutputLine.prototype._remove_wrap_indent = function() {
        if (this.__wrap_point_indent_count > 0) {
          this.__wrap_point_indent_count -= 1;
        }
      };
      OutputLine.prototype.trim = function() {
        while (this.last() === " ") {
          this.__items.pop();
          this.__character_count -= 1;
        }
      };
      OutputLine.prototype.toString = function() {
        var result = "";
        if (this.is_empty()) {
          if (this.__parent.indent_empty_lines) {
            result = this.__parent.get_indent_string(this.__indent_count);
          }
        } else {
          result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
          result += this.__items.join("");
        }
        return result;
      };
      function IndentStringCache(options, baseIndentString) {
        this.__cache = [""];
        this.__indent_size = options.indent_size;
        this.__indent_string = options.indent_char;
        if (!options.indent_with_tabs) {
          this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
        }
        baseIndentString = baseIndentString || "";
        if (options.indent_level > 0) {
          baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
        }
        this.__base_string = baseIndentString;
        this.__base_string_length = baseIndentString.length;
      }
      IndentStringCache.prototype.get_indent_size = function(indent, column) {
        var result = this.__base_string_length;
        column = column || 0;
        if (indent < 0) {
          result = 0;
        }
        result += indent * this.__indent_size;
        result += column;
        return result;
      };
      IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
        var result = this.__base_string;
        column = column || 0;
        if (indent_level < 0) {
          indent_level = 0;
          result = "";
        }
        column += indent_level * this.__indent_size;
        this.__ensure_cache(column);
        result += this.__cache[column];
        return result;
      };
      IndentStringCache.prototype.__ensure_cache = function(column) {
        while (column >= this.__cache.length) {
          this.__add_column();
        }
      };
      IndentStringCache.prototype.__add_column = function() {
        var column = this.__cache.length;
        var indent = 0;
        var result = "";
        if (this.__indent_size && column >= this.__indent_size) {
          indent = Math.floor(column / this.__indent_size);
          column -= indent * this.__indent_size;
          result = new Array(indent + 1).join(this.__indent_string);
        }
        if (column) {
          result += new Array(column + 1).join(" ");
        }
        this.__cache.push(result);
      };
      function Output(options, baseIndentString) {
        this.__indent_cache = new IndentStringCache(options, baseIndentString);
        this.raw = false;
        this._end_with_newline = options.end_with_newline;
        this.indent_size = options.indent_size;
        this.wrap_line_length = options.wrap_line_length;
        this.indent_empty_lines = options.indent_empty_lines;
        this.__lines = [];
        this.previous_line = null;
        this.current_line = null;
        this.next_line = new OutputLine(this);
        this.space_before_token = false;
        this.non_breaking_space = false;
        this.previous_token_wrapped = false;
        this.__add_outputline();
      }
      Output.prototype.__add_outputline = function() {
        this.previous_line = this.current_line;
        this.current_line = this.next_line.clone_empty();
        this.__lines.push(this.current_line);
      };
      Output.prototype.get_line_number = function() {
        return this.__lines.length;
      };
      Output.prototype.get_indent_string = function(indent, column) {
        return this.__indent_cache.get_indent_string(indent, column);
      };
      Output.prototype.get_indent_size = function(indent, column) {
        return this.__indent_cache.get_indent_size(indent, column);
      };
      Output.prototype.is_empty = function() {
        return !this.previous_line && this.current_line.is_empty();
      };
      Output.prototype.add_new_line = function(force_newline) {
        if (this.is_empty() || !force_newline && this.just_added_newline()) {
          return false;
        }
        if (!this.raw) {
          this.__add_outputline();
        }
        return true;
      };
      Output.prototype.get_code = function(eol) {
        this.trim(true);
        var last_item = this.current_line.pop();
        if (last_item) {
          if (last_item[last_item.length - 1] === "\n") {
            last_item = last_item.replace(/\n+$/g, "");
          }
          this.current_line.push(last_item);
        }
        if (this._end_with_newline) {
          this.__add_outputline();
        }
        var sweet_code = this.__lines.join("\n");
        if (eol !== "\n") {
          sweet_code = sweet_code.replace(/[\n]/g, eol);
        }
        return sweet_code;
      };
      Output.prototype.set_wrap_point = function() {
        this.current_line._set_wrap_point();
      };
      Output.prototype.set_indent = function(indent, alignment) {
        indent = indent || 0;
        alignment = alignment || 0;
        this.next_line.set_indent(indent, alignment);
        if (this.__lines.length > 1) {
          this.current_line.set_indent(indent, alignment);
          return true;
        }
        this.current_line.set_indent();
        return false;
      };
      Output.prototype.add_raw_token = function(token) {
        for (var x = 0; x < token.newlines; x++) {
          this.__add_outputline();
        }
        this.current_line.set_indent(-1);
        this.current_line.push(token.whitespace_before);
        this.current_line.push(token.text);
        this.space_before_token = false;
        this.non_breaking_space = false;
        this.previous_token_wrapped = false;
      };
      Output.prototype.add_token = function(printable_token) {
        this.__add_space_before_token();
        this.current_line.push(printable_token);
        this.space_before_token = false;
        this.non_breaking_space = false;
        this.previous_token_wrapped = this.current_line._allow_wrap();
      };
      Output.prototype.__add_space_before_token = function() {
        if (this.space_before_token && !this.just_added_newline()) {
          if (!this.non_breaking_space) {
            this.set_wrap_point();
          }
          this.current_line.push(" ");
        }
      };
      Output.prototype.remove_indent = function(index) {
        var output_length = this.__lines.length;
        while (index < output_length) {
          this.__lines[index]._remove_indent();
          index++;
        }
        this.current_line._remove_wrap_indent();
      };
      Output.prototype.trim = function(eat_newlines) {
        eat_newlines = eat_newlines === void 0 ? false : eat_newlines;
        this.current_line.trim();
        while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
          this.__lines.pop();
          this.current_line = this.__lines[this.__lines.length - 1];
          this.current_line.trim();
        }
        this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
      };
      Output.prototype.just_added_newline = function() {
        return this.current_line.is_empty();
      };
      Output.prototype.just_added_blankline = function() {
        return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
      };
      Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
        var index = this.__lines.length - 2;
        while (index >= 0) {
          var potentialEmptyLine = this.__lines[index];
          if (potentialEmptyLine.is_empty()) {
            break;
          } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
            this.__lines.splice(index + 1, 0, new OutputLine(this));
            this.previous_line = this.__lines[this.__lines.length - 2];
            break;
          }
          index--;
        }
      };
      module.exports.Output = Output;
    }
  });

  // node_modules/js-beautify/js/src/core/token.js
  var require_token = __commonJS({
    "node_modules/js-beautify/js/src/core/token.js"(exports, module) {
      "use strict";
      function Token(type, text, newlines, whitespace_before) {
        this.type = type;
        this.text = text;
        this.comments_before = null;
        this.newlines = newlines || 0;
        this.whitespace_before = whitespace_before || "";
        this.parent = null;
        this.next = null;
        this.previous = null;
        this.opened = null;
        this.closed = null;
        this.directives = null;
      }
      module.exports.Token = Token;
    }
  });

  // node_modules/js-beautify/js/src/javascript/acorn.js
  var require_acorn = __commonJS({
    "node_modules/js-beautify/js/src/javascript/acorn.js"(exports) {
      "use strict";
      var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";
      var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";
      var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
      var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
      var unicodeEscapeOrCodePoint = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}";
      var identifierStart = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
      var identifierChars = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
      exports.identifier = new RegExp(identifierStart + identifierChars, "g");
      exports.identifierStart = new RegExp(identifierStart);
      exports.identifierMatch = new RegExp("(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
      exports.newline = /[\n\r\u2028\u2029]/;
      exports.lineBreak = new RegExp("\r\n|" + exports.newline.source);
      exports.allLineBreaks = new RegExp(exports.lineBreak.source, "g");
    }
  });

  // node_modules/js-beautify/js/src/core/options.js
  var require_options = __commonJS({
    "node_modules/js-beautify/js/src/core/options.js"(exports, module) {
      "use strict";
      function Options(options, merge_child_field) {
        this.raw_options = _mergeOpts(options, merge_child_field);
        this.disabled = this._get_boolean("disabled");
        this.eol = this._get_characters("eol", "auto");
        this.end_with_newline = this._get_boolean("end_with_newline");
        this.indent_size = this._get_number("indent_size", 4);
        this.indent_char = this._get_characters("indent_char", " ");
        this.indent_level = this._get_number("indent_level");
        this.preserve_newlines = this._get_boolean("preserve_newlines", true);
        this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786);
        if (!this.preserve_newlines) {
          this.max_preserve_newlines = 0;
        }
        this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	");
        if (this.indent_with_tabs) {
          this.indent_char = "	";
          if (this.indent_size === 1) {
            this.indent_size = 4;
          }
        }
        this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char"));
        this.indent_empty_lines = this._get_boolean("indent_empty_lines");
        this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
      }
      Options.prototype._get_array = function(name, default_value) {
        var option_value = this.raw_options[name];
        var result = default_value || [];
        if (typeof option_value === "object") {
          if (option_value !== null && typeof option_value.concat === "function") {
            result = option_value.concat();
          }
        } else if (typeof option_value === "string") {
          result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
        }
        return result;
      };
      Options.prototype._get_boolean = function(name, default_value) {
        var option_value = this.raw_options[name];
        var result = option_value === void 0 ? !!default_value : !!option_value;
        return result;
      };
      Options.prototype._get_characters = function(name, default_value) {
        var option_value = this.raw_options[name];
        var result = default_value || "";
        if (typeof option_value === "string") {
          result = option_value.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "	");
        }
        return result;
      };
      Options.prototype._get_number = function(name, default_value) {
        var option_value = this.raw_options[name];
        default_value = parseInt(default_value, 10);
        if (isNaN(default_value)) {
          default_value = 0;
        }
        var result = parseInt(option_value, 10);
        if (isNaN(result)) {
          result = default_value;
        }
        return result;
      };
      Options.prototype._get_selection = function(name, selection_list, default_value) {
        var result = this._get_selection_list(name, selection_list, default_value);
        if (result.length !== 1) {
          throw new Error(
            "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'"
          );
        }
        return result[0];
      };
      Options.prototype._get_selection_list = function(name, selection_list, default_value) {
        if (!selection_list || selection_list.length === 0) {
          throw new Error("Selection list cannot be empty.");
        }
        default_value = default_value || [selection_list[0]];
        if (!this._is_valid_selection(default_value, selection_list)) {
          throw new Error("Invalid Default Value!");
        }
        var result = this._get_array(name, default_value);
        if (!this._is_valid_selection(result, selection_list)) {
          throw new Error(
            "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'"
          );
        }
        return result;
      };
      Options.prototype._is_valid_selection = function(result, selection_list) {
        return result.length && selection_list.length && !result.some(function(item) {
          return selection_list.indexOf(item) === -1;
        });
      };
      function _mergeOpts(allOptions, childFieldName) {
        var finalOpts = {};
        allOptions = _normalizeOpts(allOptions);
        var name;
        for (name in allOptions) {
          if (name !== childFieldName) {
            finalOpts[name] = allOptions[name];
          }
        }
        if (childFieldName && allOptions[childFieldName]) {
          for (name in allOptions[childFieldName]) {
            finalOpts[name] = allOptions[childFieldName][name];
          }
        }
        return finalOpts;
      }
      function _normalizeOpts(options) {
        var convertedOpts = {};
        var key;
        for (key in options) {
          var newKey = key.replace(/-/g, "_");
          convertedOpts[newKey] = options[key];
        }
        return convertedOpts;
      }
      module.exports.Options = Options;
      module.exports.normalizeOpts = _normalizeOpts;
      module.exports.mergeOpts = _mergeOpts;
    }
  });

  // node_modules/js-beautify/js/src/javascript/options.js
  var require_options2 = __commonJS({
    "node_modules/js-beautify/js/src/javascript/options.js"(exports, module) {
      "use strict";
      var BaseOptions = require_options().Options;
      var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
      function Options(options) {
        BaseOptions.call(this, options, "js");
        var raw_brace_style = this.raw_options.brace_style || null;
        if (raw_brace_style === "expand-strict") {
          this.raw_options.brace_style = "expand";
        } else if (raw_brace_style === "collapse-preserve-inline") {
          this.raw_options.brace_style = "collapse,preserve-inline";
        } else if (this.raw_options.braces_on_own_line !== void 0) {
          this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
        }
        var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
        this.brace_preserve_inline = false;
        this.brace_style = "collapse";
        for (var bs = 0; bs < brace_style_split.length; bs++) {
          if (brace_style_split[bs] === "preserve-inline") {
            this.brace_preserve_inline = true;
          } else {
            this.brace_style = brace_style_split[bs];
          }
        }
        this.unindent_chained_methods = this._get_boolean("unindent_chained_methods");
        this.break_chained_methods = this._get_boolean("break_chained_methods");
        this.space_in_paren = this._get_boolean("space_in_paren");
        this.space_in_empty_paren = this._get_boolean("space_in_empty_paren");
        this.jslint_happy = this._get_boolean("jslint_happy");
        this.space_after_anon_function = this._get_boolean("space_after_anon_function");
        this.space_after_named_function = this._get_boolean("space_after_named_function");
        this.keep_array_indentation = this._get_boolean("keep_array_indentation");
        this.space_before_conditional = this._get_boolean("space_before_conditional", true);
        this.unescape_strings = this._get_boolean("unescape_strings");
        this.e4x = this._get_boolean("e4x");
        this.comma_first = this._get_boolean("comma_first");
        this.operator_position = this._get_selection("operator_position", validPositionValues);
        this.test_output_raw = this._get_boolean("test_output_raw");
        if (this.jslint_happy) {
          this.space_after_anon_function = true;
        }
      }
      Options.prototype = new BaseOptions();
      module.exports.Options = Options;
    }
  });

  // node_modules/js-beautify/js/src/core/inputscanner.js
  var require_inputscanner = __commonJS({
    "node_modules/js-beautify/js/src/core/inputscanner.js"(exports, module) {
      "use strict";
      var regexp_has_sticky = RegExp.prototype.hasOwnProperty("sticky");
      function InputScanner(input_string) {
        this.__input = input_string || "";
        this.__input_length = this.__input.length;
        this.__position = 0;
      }
      InputScanner.prototype.restart = function() {
        this.__position = 0;
      };
      InputScanner.prototype.back = function() {
        if (this.__position > 0) {
          this.__position -= 1;
        }
      };
      InputScanner.prototype.hasNext = function() {
        return this.__position < this.__input_length;
      };
      InputScanner.prototype.next = function() {
        var val = null;
        if (this.hasNext()) {
          val = this.__input.charAt(this.__position);
          this.__position += 1;
        }
        return val;
      };
      InputScanner.prototype.peek = function(index) {
        var val = null;
        index = index || 0;
        index += this.__position;
        if (index >= 0 && index < this.__input_length) {
          val = this.__input.charAt(index);
        }
        return val;
      };
      InputScanner.prototype.__match = function(pattern, index) {
        pattern.lastIndex = index;
        var pattern_match = pattern.exec(this.__input);
        if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
          if (pattern_match.index !== index) {
            pattern_match = null;
          }
        }
        return pattern_match;
      };
      InputScanner.prototype.test = function(pattern, index) {
        index = index || 0;
        index += this.__position;
        if (index >= 0 && index < this.__input_length) {
          return !!this.__match(pattern, index);
        } else {
          return false;
        }
      };
      InputScanner.prototype.testChar = function(pattern, index) {
        var val = this.peek(index);
        pattern.lastIndex = 0;
        return val !== null && pattern.test(val);
      };
      InputScanner.prototype.match = function(pattern) {
        var pattern_match = this.__match(pattern, this.__position);
        if (pattern_match) {
          this.__position += pattern_match[0].length;
        } else {
          pattern_match = null;
        }
        return pattern_match;
      };
      InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
        var val = "";
        var match;
        if (starting_pattern) {
          match = this.match(starting_pattern);
          if (match) {
            val += match[0];
          }
        }
        if (until_pattern && (match || !starting_pattern)) {
          val += this.readUntil(until_pattern, until_after);
        }
        return val;
      };
      InputScanner.prototype.readUntil = function(pattern, until_after) {
        var val = "";
        var match_index = this.__position;
        pattern.lastIndex = this.__position;
        var pattern_match = pattern.exec(this.__input);
        if (pattern_match) {
          match_index = pattern_match.index;
          if (until_after) {
            match_index += pattern_match[0].length;
          }
        } else {
          match_index = this.__input_length;
        }
        val = this.__input.substring(this.__position, match_index);
        this.__position = match_index;
        return val;
      };
      InputScanner.prototype.readUntilAfter = function(pattern) {
        return this.readUntil(pattern, true);
      };
      InputScanner.prototype.get_regexp = function(pattern, match_from) {
        var result = null;
        var flags = "g";
        if (match_from && regexp_has_sticky) {
          flags = "y";
        }
        if (typeof pattern === "string" && pattern !== "") {
          result = new RegExp(pattern, flags);
        } else if (pattern) {
          result = new RegExp(pattern.source, flags);
        }
        return result;
      };
      InputScanner.prototype.get_literal_regexp = function(literal_string) {
        return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
      };
      InputScanner.prototype.peekUntilAfter = function(pattern) {
        var start = this.__position;
        var val = this.readUntilAfter(pattern);
        this.__position = start;
        return val;
      };
      InputScanner.prototype.lookBack = function(testVal) {
        var start = this.__position - 1;
        return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
      };
      module.exports.InputScanner = InputScanner;
    }
  });

  // node_modules/js-beautify/js/src/core/tokenstream.js
  var require_tokenstream = __commonJS({
    "node_modules/js-beautify/js/src/core/tokenstream.js"(exports, module) {
      "use strict";
      function TokenStream(parent_token) {
        this.__tokens = [];
        this.__tokens_length = this.__tokens.length;
        this.__position = 0;
        this.__parent_token = parent_token;
      }
      TokenStream.prototype.restart = function() {
        this.__position = 0;
      };
      TokenStream.prototype.isEmpty = function() {
        return this.__tokens_length === 0;
      };
      TokenStream.prototype.hasNext = function() {
        return this.__position < this.__tokens_length;
      };
      TokenStream.prototype.next = function() {
        var val = null;
        if (this.hasNext()) {
          val = this.__tokens[this.__position];
          this.__position += 1;
        }
        return val;
      };
      TokenStream.prototype.peek = function(index) {
        var val = null;
        index = index || 0;
        index += this.__position;
        if (index >= 0 && index < this.__tokens_length) {
          val = this.__tokens[index];
        }
        return val;
      };
      TokenStream.prototype.add = function(token) {
        if (this.__parent_token) {
          token.parent = this.__parent_token;
        }
        this.__tokens.push(token);
        this.__tokens_length += 1;
      };
      module.exports.TokenStream = TokenStream;
    }
  });

  // node_modules/js-beautify/js/src/core/pattern.js
  var require_pattern = __commonJS({
    "node_modules/js-beautify/js/src/core/pattern.js"(exports, module) {
      "use strict";
      function Pattern(input_scanner, parent) {
        this._input = input_scanner;
        this._starting_pattern = null;
        this._match_pattern = null;
        this._until_pattern = null;
        this._until_after = false;
        if (parent) {
          this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
          this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
          this._until_pattern = this._input.get_regexp(parent._until_pattern);
          this._until_after = parent._until_after;
        }
      }
      Pattern.prototype.read = function() {
        var result = this._input.read(this._starting_pattern);
        if (!this._starting_pattern || result) {
          result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
        }
        return result;
      };
      Pattern.prototype.read_match = function() {
        return this._input.match(this._match_pattern);
      };
      Pattern.prototype.until_after = function(pattern) {
        var result = this._create();
        result._until_after = true;
        result._until_pattern = this._input.get_regexp(pattern);
        result._update();
        return result;
      };
      Pattern.prototype.until = function(pattern) {
        var result = this._create();
        result._until_after = false;
        result._until_pattern = this._input.get_regexp(pattern);
        result._update();
        return result;
      };
      Pattern.prototype.starting_with = function(pattern) {
        var result = this._create();
        result._starting_pattern = this._input.get_regexp(pattern, true);
        result._update();
        return result;
      };
      Pattern.prototype.matching = function(pattern) {
        var result = this._create();
        result._match_pattern = this._input.get_regexp(pattern, true);
        result._update();
        return result;
      };
      Pattern.prototype._create = function() {
        return new Pattern(this._input, this);
      };
      Pattern.prototype._update = function() {
      };
      module.exports.Pattern = Pattern;
    }
  });

  // node_modules/js-beautify/js/src/core/whitespacepattern.js
  var require_whitespacepattern = __commonJS({
    "node_modules/js-beautify/js/src/core/whitespacepattern.js"(exports, module) {
      "use strict";
      var Pattern = require_pattern().Pattern;
      function WhitespacePattern(input_scanner, parent) {
        Pattern.call(this, input_scanner, parent);
        if (parent) {
          this._line_regexp = this._input.get_regexp(parent._line_regexp);
        } else {
          this.__set_whitespace_patterns("", "");
        }
        this.newline_count = 0;
        this.whitespace_before_token = "";
      }
      WhitespacePattern.prototype = new Pattern();
      WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
        whitespace_chars += "\\t ";
        newline_chars += "\\n\\r";
        this._match_pattern = this._input.get_regexp(
          "[" + whitespace_chars + newline_chars + "]+",
          true
        );
        this._newline_regexp = this._input.get_regexp(
          "\\r\\n|[" + newline_chars + "]"
        );
      };
      WhitespacePattern.prototype.read = function() {
        this.newline_count = 0;
        this.whitespace_before_token = "";
        var resulting_string = this._input.read(this._match_pattern);
        if (resulting_string === " ") {
          this.whitespace_before_token = " ";
        } else if (resulting_string) {
          var matches = this.__split(this._newline_regexp, resulting_string);
          this.newline_count = matches.length - 1;
          this.whitespace_before_token = matches[this.newline_count];
        }
        return resulting_string;
      };
      WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
        var result = this._create();
        result.__set_whitespace_patterns(whitespace_chars, newline_chars);
        result._update();
        return result;
      };
      WhitespacePattern.prototype._create = function() {
        return new WhitespacePattern(this._input, this);
      };
      WhitespacePattern.prototype.__split = function(regexp, input_string) {
        regexp.lastIndex = 0;
        var start_index = 0;
        var result = [];
        var next_match = regexp.exec(input_string);
        while (next_match) {
          result.push(input_string.substring(start_index, next_match.index));
          start_index = next_match.index + next_match[0].length;
          next_match = regexp.exec(input_string);
        }
        if (start_index < input_string.length) {
          result.push(input_string.substring(start_index, input_string.length));
        } else {
          result.push("");
        }
        return result;
      };
      module.exports.WhitespacePattern = WhitespacePattern;
    }
  });

  // node_modules/js-beautify/js/src/core/tokenizer.js
  var require_tokenizer = __commonJS({
    "node_modules/js-beautify/js/src/core/tokenizer.js"(exports, module) {
      "use strict";
      var InputScanner = require_inputscanner().InputScanner;
      var Token = require_token().Token;
      var TokenStream = require_tokenstream().TokenStream;
      var WhitespacePattern = require_whitespacepattern().WhitespacePattern;
      var TOKEN = {
        START: "TK_START",
        RAW: "TK_RAW",
        EOF: "TK_EOF"
      };
      var Tokenizer = function(input_string, options) {
        this._input = new InputScanner(input_string);
        this._options = options || {};
        this.__tokens = null;
        this._patterns = {};
        this._patterns.whitespace = new WhitespacePattern(this._input);
      };
      Tokenizer.prototype.tokenize = function() {
        this._input.restart();
        this.__tokens = new TokenStream();
        this._reset();
        var current;
        var previous = new Token(TOKEN.START, "");
        var open_token = null;
        var open_stack = [];
        var comments = new TokenStream();
        while (previous.type !== TOKEN.EOF) {
          current = this._get_next_token(previous, open_token);
          while (this._is_comment(current)) {
            comments.add(current);
            current = this._get_next_token(previous, open_token);
          }
          if (!comments.isEmpty()) {
            current.comments_before = comments;
            comments = new TokenStream();
          }
          current.parent = open_token;
          if (this._is_opening(current)) {
            open_stack.push(open_token);
            open_token = current;
          } else if (open_token && this._is_closing(current, open_token)) {
            current.opened = open_token;
            open_token.closed = current;
            open_token = open_stack.pop();
            current.parent = open_token;
          }
          current.previous = previous;
          previous.next = current;
          this.__tokens.add(current);
          previous = current;
        }
        return this.__tokens;
      };
      Tokenizer.prototype._is_first_token = function() {
        return this.__tokens.isEmpty();
      };
      Tokenizer.prototype._reset = function() {
      };
      Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
        this._readWhitespace();
        var resulting_string = this._input.read(/.+/g);
        if (resulting_string) {
          return this._create_token(TOKEN.RAW, resulting_string);
        } else {
          return this._create_token(TOKEN.EOF, "");
        }
      };
      Tokenizer.prototype._is_comment = function(current_token) {
        return false;
      };
      Tokenizer.prototype._is_opening = function(current_token) {
        return false;
      };
      Tokenizer.prototype._is_closing = function(current_token, open_token) {
        return false;
      };
      Tokenizer.prototype._create_token = function(type, text) {
        var token = new Token(
          type,
          text,
          this._patterns.whitespace.newline_count,
          this._patterns.whitespace.whitespace_before_token
        );
        return token;
      };
      Tokenizer.prototype._readWhitespace = function() {
        return this._patterns.whitespace.read();
      };
      module.exports.Tokenizer = Tokenizer;
      module.exports.TOKEN = TOKEN;
    }
  });

  // node_modules/js-beautify/js/src/core/directives.js
  var require_directives = __commonJS({
    "node_modules/js-beautify/js/src/core/directives.js"(exports, module) {
      "use strict";
      function Directives(start_block_pattern, end_block_pattern) {
        start_block_pattern = typeof start_block_pattern === "string" ? start_block_pattern : start_block_pattern.source;
        end_block_pattern = typeof end_block_pattern === "string" ? end_block_pattern : end_block_pattern.source;
        this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, "g");
        this.__directive_pattern = / (\w+)[:](\w+)/g;
        this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, "g");
      }
      Directives.prototype.get_directives = function(text) {
        if (!text.match(this.__directives_block_pattern)) {
          return null;
        }
        var directives = {};
        this.__directive_pattern.lastIndex = 0;
        var directive_match = this.__directive_pattern.exec(text);
        while (directive_match) {
          directives[directive_match[1]] = directive_match[2];
          directive_match = this.__directive_pattern.exec(text);
        }
        return directives;
      };
      Directives.prototype.readIgnored = function(input) {
        return input.readUntilAfter(this.__directives_end_ignore_pattern);
      };
      module.exports.Directives = Directives;
    }
  });

  // node_modules/js-beautify/js/src/core/templatablepattern.js
  var require_templatablepattern = __commonJS({
    "node_modules/js-beautify/js/src/core/templatablepattern.js"(exports, module) {
      "use strict";
      var Pattern = require_pattern().Pattern;
      var template_names = {
        django: false,
        erb: false,
        handlebars: false,
        php: false,
        smarty: false,
        angular: false
      };
      function TemplatablePattern(input_scanner, parent) {
        Pattern.call(this, input_scanner, parent);
        this.__template_pattern = null;
        this._disabled = Object.assign({}, template_names);
        this._excluded = Object.assign({}, template_names);
        if (parent) {
          this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
          this._excluded = Object.assign(this._excluded, parent._excluded);
          this._disabled = Object.assign(this._disabled, parent._disabled);
        }
        var pattern = new Pattern(input_scanner);
        this.__patterns = {
          handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
          handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
          handlebars: pattern.starting_with(/{{/).until_after(/}}/),
          php: pattern.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
          erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
          // django coflicts with handlebars a bit.
          django: pattern.starting_with(/{%/).until_after(/%}/),
          django_value: pattern.starting_with(/{{/).until_after(/}}/),
          django_comment: pattern.starting_with(/{#/).until_after(/#}/),
          smarty: pattern.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
          smarty_comment: pattern.starting_with(/{\*/).until_after(/\*}/),
          smarty_literal: pattern.starting_with(/{literal}/).until_after(/{\/literal}/)
        };
      }
      TemplatablePattern.prototype = new Pattern();
      TemplatablePattern.prototype._create = function() {
        return new TemplatablePattern(this._input, this);
      };
      TemplatablePattern.prototype._update = function() {
        this.__set_templated_pattern();
      };
      TemplatablePattern.prototype.disable = function(language) {
        var result = this._create();
        result._disabled[language] = true;
        result._update();
        return result;
      };
      TemplatablePattern.prototype.read_options = function(options) {
        var result = this._create();
        for (var language in template_names) {
          result._disabled[language] = options.templating.indexOf(language) === -1;
        }
        result._update();
        return result;
      };
      TemplatablePattern.prototype.exclude = function(language) {
        var result = this._create();
        result._excluded[language] = true;
        result._update();
        return result;
      };
      TemplatablePattern.prototype.read = function() {
        var result = "";
        if (this._match_pattern) {
          result = this._input.read(this._starting_pattern);
        } else {
          result = this._input.read(this._starting_pattern, this.__template_pattern);
        }
        var next = this._read_template();
        while (next) {
          if (this._match_pattern) {
            next += this._input.read(this._match_pattern);
          } else {
            next += this._input.readUntil(this.__template_pattern);
          }
          result += next;
          next = this._read_template();
        }
        if (this._until_after) {
          result += this._input.readUntilAfter(this._until_pattern);
        }
        return result;
      };
      TemplatablePattern.prototype.__set_templated_pattern = function() {
        var items = [];
        if (!this._disabled.php) {
          items.push(this.__patterns.php._starting_pattern.source);
        }
        if (!this._disabled.handlebars) {
          items.push(this.__patterns.handlebars._starting_pattern.source);
        }
        if (!this._disabled.angular) {
          items.push(this.__patterns.handlebars._starting_pattern.source);
        }
        if (!this._disabled.erb) {
          items.push(this.__patterns.erb._starting_pattern.source);
        }
        if (!this._disabled.django) {
          items.push(this.__patterns.django._starting_pattern.source);
          items.push(this.__patterns.django_value._starting_pattern.source);
          items.push(this.__patterns.django_comment._starting_pattern.source);
        }
        if (!this._disabled.smarty) {
          items.push(this.__patterns.smarty._starting_pattern.source);
        }
        if (this._until_pattern) {
          items.push(this._until_pattern.source);
        }
        this.__template_pattern = this._input.get_regexp("(?:" + items.join("|") + ")");
      };
      TemplatablePattern.prototype._read_template = function() {
        var resulting_string = "";
        var c = this._input.peek();
        if (c === "<") {
          var peek1 = this._input.peek(1);
          if (!this._disabled.php && !this._excluded.php && peek1 === "?") {
            resulting_string = resulting_string || this.__patterns.php.read();
          }
          if (!this._disabled.erb && !this._excluded.erb && peek1 === "%") {
            resulting_string = resulting_string || this.__patterns.erb.read();
          }
        } else if (c === "{") {
          if (!this._disabled.handlebars && !this._excluded.handlebars) {
            resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
            resulting_string = resulting_string || this.__patterns.handlebars_unescaped.read();
            resulting_string = resulting_string || this.__patterns.handlebars.read();
          }
          if (!this._disabled.django) {
            if (!this._excluded.django && !this._excluded.handlebars) {
              resulting_string = resulting_string || this.__patterns.django_value.read();
            }
            if (!this._excluded.django) {
              resulting_string = resulting_string || this.__patterns.django_comment.read();
              resulting_string = resulting_string || this.__patterns.django.read();
            }
          }
          if (!this._disabled.smarty) {
            if (this._disabled.django && this._disabled.handlebars) {
              resulting_string = resulting_string || this.__patterns.smarty_comment.read();
              resulting_string = resulting_string || this.__patterns.smarty_literal.read();
              resulting_string = resulting_string || this.__patterns.smarty.read();
            }
          }
        }
        return resulting_string;
      };
      module.exports.TemplatablePattern = TemplatablePattern;
    }
  });

  // node_modules/js-beautify/js/src/javascript/tokenizer.js
  var require_tokenizer2 = __commonJS({
    "node_modules/js-beautify/js/src/javascript/tokenizer.js"(exports, module) {
      "use strict";
      var InputScanner = require_inputscanner().InputScanner;
      var BaseTokenizer = require_tokenizer().Tokenizer;
      var BASETOKEN = require_tokenizer().TOKEN;
      var Directives = require_directives().Directives;
      var acorn = require_acorn();
      var Pattern = require_pattern().Pattern;
      var TemplatablePattern = require_templatablepattern().TemplatablePattern;
      function in_array(what, arr) {
        return arr.indexOf(what) !== -1;
      }
      var TOKEN = {
        START_EXPR: "TK_START_EXPR",
        END_EXPR: "TK_END_EXPR",
        START_BLOCK: "TK_START_BLOCK",
        END_BLOCK: "TK_END_BLOCK",
        WORD: "TK_WORD",
        RESERVED: "TK_RESERVED",
        SEMICOLON: "TK_SEMICOLON",
        STRING: "TK_STRING",
        EQUALS: "TK_EQUALS",
        OPERATOR: "TK_OPERATOR",
        COMMA: "TK_COMMA",
        BLOCK_COMMENT: "TK_BLOCK_COMMENT",
        COMMENT: "TK_COMMENT",
        DOT: "TK_DOT",
        UNKNOWN: "TK_UNKNOWN",
        START: BASETOKEN.START,
        RAW: BASETOKEN.RAW,
        EOF: BASETOKEN.EOF
      };
      var directives_core = new Directives(/\/\*/, /\*\//);
      var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;
      var digit = /[0-9]/;
      var dot_pattern = /[^\d\.]/;
      var positionable_operators = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" ");
      var punct = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
      punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
      punct = "\\?\\.(?!\\d) " + punct;
      punct = punct.replace(/ /g, "|");
      var punct_pattern = new RegExp(punct);
      var line_starters = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");
      var reserved_words = line_starters.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]);
      var reserved_word_pattern = new RegExp("^(?:" + reserved_words.join("|") + ")$");
      var in_html_comment;
      var Tokenizer = function(input_string, options) {
        BaseTokenizer.call(this, input_string, options);
        this._patterns.whitespace = this._patterns.whitespace.matching(
          /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
          /\u2028\u2029/.source
        );
        var pattern_reader = new Pattern(this._input);
        var templatable = new TemplatablePattern(this._input).read_options(this._options);
        this.__patterns = {
          template: templatable,
          identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
          number: pattern_reader.matching(number_pattern),
          punct: pattern_reader.matching(punct_pattern),
          // comment ends just before nearest linefeed or end of file
          comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
          //  /* ... */ comment ends with nearest */ or end of file
          block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
          html_comment_start: pattern_reader.matching(/<!--/),
          html_comment_end: pattern_reader.matching(/-->/),
          include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
          shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
          xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
          single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
          double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
          template_text: templatable.until(/[`\\$]/),
          template_expression: templatable.until(/[`}\\]/)
        };
      };
      Tokenizer.prototype = new BaseTokenizer();
      Tokenizer.prototype._is_comment = function(current_token) {
        return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
      };
      Tokenizer.prototype._is_opening = function(current_token) {
        return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
      };
      Tokenizer.prototype._is_closing = function(current_token, open_token) {
        return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) && (open_token && (current_token.text === "]" && open_token.text === "[" || current_token.text === ")" && open_token.text === "(" || current_token.text === "}" && open_token.text === "{"));
      };
      Tokenizer.prototype._reset = function() {
        in_html_comment = false;
      };
      Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
        var token = null;
        this._readWhitespace();
        var c = this._input.peek();
        if (c === null) {
          return this._create_token(TOKEN.EOF, "");
        }
        token = token || this._read_non_javascript(c);
        token = token || this._read_string(c);
        token = token || this._read_pair(c, this._input.peek(1));
        token = token || this._read_word(previous_token);
        token = token || this._read_singles(c);
        token = token || this._read_comment(c);
        token = token || this._read_regexp(c, previous_token);
        token = token || this._read_xml(c, previous_token);
        token = token || this._read_punctuation();
        token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
        return token;
      };
      Tokenizer.prototype._read_word = function(previous_token) {
        var resulting_string;
        resulting_string = this.__patterns.identifier.read();
        if (resulting_string !== "") {
          resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
          if (!(previous_token.type === TOKEN.DOT || previous_token.type === TOKEN.RESERVED && (previous_token.text === "set" || previous_token.text === "get")) && reserved_word_pattern.test(resulting_string)) {
            if ((resulting_string === "in" || resulting_string === "of") && (previous_token.type === TOKEN.WORD || previous_token.type === TOKEN.STRING)) {
              return this._create_token(TOKEN.OPERATOR, resulting_string);
            }
            return this._create_token(TOKEN.RESERVED, resulting_string);
          }
          return this._create_token(TOKEN.WORD, resulting_string);
        }
        resulting_string = this.__patterns.number.read();
        if (resulting_string !== "") {
          return this._create_token(TOKEN.WORD, resulting_string);
        }
      };
      Tokenizer.prototype._read_singles = function(c) {
        var token = null;
        if (c === "(" || c === "[") {
          token = this._create_token(TOKEN.START_EXPR, c);
        } else if (c === ")" || c === "]") {
          token = this._create_token(TOKEN.END_EXPR, c);
        } else if (c === "{") {
          token = this._create_token(TOKEN.START_BLOCK, c);
        } else if (c === "}") {
          token = this._create_token(TOKEN.END_BLOCK, c);
        } else if (c === ";") {
          token = this._create_token(TOKEN.SEMICOLON, c);
        } else if (c === "." && dot_pattern.test(this._input.peek(1))) {
          token = this._create_token(TOKEN.DOT, c);
        } else if (c === ",") {
          token = this._create_token(TOKEN.COMMA, c);
        }
        if (token) {
          this._input.next();
        }
        return token;
      };
      Tokenizer.prototype._read_pair = function(c, d) {
        var token = null;
        if (c === "#" && d === "{") {
          token = this._create_token(TOKEN.START_BLOCK, c + d);
        }
        if (token) {
          this._input.next();
          this._input.next();
        }
        return token;
      };
      Tokenizer.prototype._read_punctuation = function() {
        var resulting_string = this.__patterns.punct.read();
        if (resulting_string !== "") {
          if (resulting_string === "=") {
            return this._create_token(TOKEN.EQUALS, resulting_string);
          } else if (resulting_string === "?.") {
            return this._create_token(TOKEN.DOT, resulting_string);
          } else {
            return this._create_token(TOKEN.OPERATOR, resulting_string);
          }
        }
      };
      Tokenizer.prototype._read_non_javascript = function(c) {
        var resulting_string = "";
        if (c === "#") {
          if (this._is_first_token()) {
            resulting_string = this.__patterns.shebang.read();
            if (resulting_string) {
              return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
            }
          }
          resulting_string = this.__patterns.include.read();
          if (resulting_string) {
            return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
          }
          c = this._input.next();
          var sharp = "#";
          if (this._input.hasNext() && this._input.testChar(digit)) {
            do {
              c = this._input.next();
              sharp += c;
            } while (this._input.hasNext() && c !== "#" && c !== "=");
            if (c === "#") {
            } else if (this._input.peek() === "[" && this._input.peek(1) === "]") {
              sharp += "[]";
              this._input.next();
              this._input.next();
            } else if (this._input.peek() === "{" && this._input.peek(1) === "}") {
              sharp += "{}";
              this._input.next();
              this._input.next();
            }
            return this._create_token(TOKEN.WORD, sharp);
          }
          this._input.back();
        } else if (c === "<" && this._is_first_token()) {
          resulting_string = this.__patterns.html_comment_start.read();
          if (resulting_string) {
            while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
              resulting_string += this._input.next();
            }
            in_html_comment = true;
            return this._create_token(TOKEN.COMMENT, resulting_string);
          }
        } else if (in_html_comment && c === "-") {
          resulting_string = this.__patterns.html_comment_end.read();
          if (resulting_string) {
            in_html_comment = false;
            return this._create_token(TOKEN.COMMENT, resulting_string);
          }
        }
        return null;
      };
      Tokenizer.prototype._read_comment = function(c) {
        var token = null;
        if (c === "/") {
          var comment = "";
          if (this._input.peek(1) === "*") {
            comment = this.__patterns.block_comment.read();
            var directives = directives_core.get_directives(comment);
            if (directives && directives.ignore === "start") {
              comment += directives_core.readIgnored(this._input);
            }
            comment = comment.replace(acorn.allLineBreaks, "\n");
            token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
            token.directives = directives;
          } else if (this._input.peek(1) === "/") {
            comment = this.__patterns.comment.read();
            token = this._create_token(TOKEN.COMMENT, comment);
          }
        }
        return token;
      };
      Tokenizer.prototype._read_string = function(c) {
        if (c === "`" || c === "'" || c === '"') {
          var resulting_string = this._input.next();
          this.has_char_escapes = false;
          if (c === "`") {
            resulting_string += this._read_string_recursive("`", true, "${");
          } else {
            resulting_string += this._read_string_recursive(c);
          }
          if (this.has_char_escapes && this._options.unescape_strings) {
            resulting_string = unescape_string(resulting_string);
          }
          if (this._input.peek() === c) {
            resulting_string += this._input.next();
          }
          resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
          return this._create_token(TOKEN.STRING, resulting_string);
        }
        return null;
      };
      Tokenizer.prototype._allow_regexp_or_xml = function(previous_token) {
        return previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || previous_token.type === TOKEN.END_EXPR && previous_token.text === ")" && previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ["if", "while", "for"]) || in_array(previous_token.type, [
          TOKEN.COMMENT,
          TOKEN.START_EXPR,
          TOKEN.START_BLOCK,
          TOKEN.START,
          TOKEN.END_BLOCK,
          TOKEN.OPERATOR,
          TOKEN.EQUALS,
          TOKEN.EOF,
          TOKEN.SEMICOLON,
          TOKEN.COMMA
        ]);
      };
      Tokenizer.prototype._read_regexp = function(c, previous_token) {
        if (c === "/" && this._allow_regexp_or_xml(previous_token)) {
          var resulting_string = this._input.next();
          var esc = false;
          var in_char_class = false;
          while (this._input.hasNext() && ((esc || in_char_class || this._input.peek() !== c) && !this._input.testChar(acorn.newline))) {
            resulting_string += this._input.peek();
            if (!esc) {
              esc = this._input.peek() === "\\";
              if (this._input.peek() === "[") {
                in_char_class = true;
              } else if (this._input.peek() === "]") {
                in_char_class = false;
              }
            } else {
              esc = false;
            }
            this._input.next();
          }
          if (this._input.peek() === c) {
            resulting_string += this._input.next();
            resulting_string += this._input.read(acorn.identifier);
          }
          return this._create_token(TOKEN.STRING, resulting_string);
        }
        return null;
      };
      Tokenizer.prototype._read_xml = function(c, previous_token) {
        if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
          var xmlStr = "";
          var match = this.__patterns.xml.read_match();
          if (match) {
            var rootTag = match[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}");
            var isCurlyRoot = rootTag.indexOf("{") === 0;
            var depth = 0;
            while (match) {
              var isEndTag = !!match[1];
              var tagName = match[2];
              var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";
              if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, "{").replace(/\s+}$/, "}"))) {
                if (isEndTag) {
                  --depth;
                } else {
                  ++depth;
                }
              }
              xmlStr += match[0];
              if (depth <= 0) {
                break;
              }
              match = this.__patterns.xml.read_match();
            }
            if (!match) {
              xmlStr += this._input.match(/[\s\S]*/g)[0];
            }
            xmlStr = xmlStr.replace(acorn.allLineBreaks, "\n");
            return this._create_token(TOKEN.STRING, xmlStr);
          }
        }
        return null;
      };
      function unescape_string(s) {
        var out = "", escaped = 0;
        var input_scan = new InputScanner(s);
        var matched = null;
        while (input_scan.hasNext()) {
          matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);
          if (matched) {
            out += matched[0];
          }
          if (input_scan.peek() === "\\") {
            input_scan.next();
            if (input_scan.peek() === "x") {
              matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
            } else if (input_scan.peek() === "u") {
              matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
              if (!matched) {
                matched = input_scan.match(/u\{([0-9A-Fa-f]+)\}/g);
              }
            } else {
              out += "\\";
              if (input_scan.hasNext()) {
                out += input_scan.next();
              }
              continue;
            }
            if (!matched) {
              return s;
            }
            escaped = parseInt(matched[1], 16);
            if (escaped > 126 && escaped <= 255 && matched[0].indexOf("x") === 0) {
              return s;
            } else if (escaped >= 0 && escaped < 32) {
              out += "\\" + matched[0];
            } else if (escaped > 1114111) {
              out += "\\" + matched[0];
            } else if (escaped === 34 || escaped === 39 || escaped === 92) {
              out += "\\" + String.fromCharCode(escaped);
            } else {
              out += String.fromCharCode(escaped);
            }
          }
        }
        return out;
      }
      Tokenizer.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
        var current_char;
        var pattern;
        if (delimiter === "'") {
          pattern = this.__patterns.single_quote;
        } else if (delimiter === '"') {
          pattern = this.__patterns.double_quote;
        } else if (delimiter === "`") {
          pattern = this.__patterns.template_text;
        } else if (delimiter === "}") {
          pattern = this.__patterns.template_expression;
        }
        var resulting_string = pattern.read();
        var next = "";
        while (this._input.hasNext()) {
          next = this._input.next();
          if (next === delimiter || !allow_unescaped_newlines && acorn.newline.test(next)) {
            this._input.back();
            break;
          } else if (next === "\\" && this._input.hasNext()) {
            current_char = this._input.peek();
            if (current_char === "x" || current_char === "u") {
              this.has_char_escapes = true;
            } else if (current_char === "\r" && this._input.peek(1) === "\n") {
              this._input.next();
            }
            next += this._input.next();
          } else if (start_sub) {
            if (start_sub === "${" && next === "$" && this._input.peek() === "{") {
              next += this._input.next();
            }
            if (start_sub === next) {
              if (delimiter === "`") {
                next += this._read_string_recursive("}", allow_unescaped_newlines, "`");
              } else {
                next += this._read_string_recursive("`", allow_unescaped_newlines, "${");
              }
              if (this._input.hasNext()) {
                next += this._input.next();
              }
            }
          }
          next += pattern.read();
          resulting_string += next;
        }
        return resulting_string;
      };
      module.exports.Tokenizer = Tokenizer;
      module.exports.TOKEN = TOKEN;
      module.exports.positionable_operators = positionable_operators.slice();
      module.exports.line_starters = line_starters.slice();
    }
  });

  // node_modules/js-beautify/js/src/javascript/beautifier.js
  var require_beautifier = __commonJS({
    "node_modules/js-beautify/js/src/javascript/beautifier.js"(exports, module) {
      "use strict";
      var Output = require_output().Output;
      var Token = require_token().Token;
      var acorn = require_acorn();
      var Options = require_options2().Options;
      var Tokenizer = require_tokenizer2().Tokenizer;
      var line_starters = require_tokenizer2().line_starters;
      var positionable_operators = require_tokenizer2().positionable_operators;
      var TOKEN = require_tokenizer2().TOKEN;
      function in_array(what, arr) {
        return arr.indexOf(what) !== -1;
      }
      function ltrim(s) {
        return s.replace(/^\s+/g, "");
      }
      function generateMapFromStrings(list) {
        var result = {};
        for (var x = 0; x < list.length; x++) {
          result[list[x].replace(/-/g, "_")] = list[x];
        }
        return result;
      }
      function reserved_word(token, word) {
        return token && token.type === TOKEN.RESERVED && token.text === word;
      }
      function reserved_array(token, words) {
        return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
      }
      var special_words = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"];
      var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
      var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);
      var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
      var MODE = {
        BlockStatement: "BlockStatement",
        // 'BLOCK'
        Statement: "Statement",
        // 'STATEMENT'
        ObjectLiteral: "ObjectLiteral",
        // 'OBJECT',
        ArrayLiteral: "ArrayLiteral",
        //'[EXPRESSION]',
        ForInitializer: "ForInitializer",
        //'(FOR-EXPRESSION)',
        Conditional: "Conditional",
        //'(COND-EXPRESSION)',
        Expression: "Expression"
        //'(EXPRESSION)'
      };
      function remove_redundant_indentation(output, frame) {
        if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
          return;
        }
        output.remove_indent(frame.start_line_index);
      }
      function split_linebreaks(s) {
        s = s.replace(acorn.allLineBreaks, "\n");
        var out = [], idx = s.indexOf("\n");
        while (idx !== -1) {
          out.push(s.substring(0, idx));
          s = s.substring(idx + 1);
          idx = s.indexOf("\n");
        }
        if (s.length) {
          out.push(s);
        }
        return out;
      }
      function is_array(mode) {
        return mode === MODE.ArrayLiteral;
      }
      function is_expression(mode) {
        return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
      }
      function all_lines_start_with(lines2, c) {
        for (var i = 0; i < lines2.length; i++) {
          var line = lines2[i].trim();
          if (line.charAt(0) !== c) {
            return false;
          }
        }
        return true;
      }
      function each_line_matches_indent(lines2, indent) {
        var i = 0, len = lines2.length, line;
        for (; i < len; i++) {
          line = lines2[i];
          if (line && line.indexOf(indent) !== 0) {
            return false;
          }
        }
        return true;
      }
      function Beautifier(source_text, options) {
        options = options || {};
        this._source_text = source_text || "";
        this._output = null;
        this._tokens = null;
        this._last_last_text = null;
        this._flags = null;
        this._previous_flags = null;
        this._flag_store = null;
        this._options = new Options(options);
      }
      Beautifier.prototype.create_flags = function(flags_base, mode) {
        var next_indent_level = 0;
        if (flags_base) {
          next_indent_level = flags_base.indentation_level;
          if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
            next_indent_level = flags_base.line_indent_level;
          }
        }
        var next_flags = {
          mode,
          parent: flags_base,
          last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ""),
          // last token text
          last_word: flags_base ? flags_base.last_word : "",
          // last TOKEN.WORD passed
          declaration_statement: false,
          declaration_assignment: false,
          multiline_frame: false,
          inline_frame: false,
          if_block: false,
          else_block: false,
          class_start_block: false,
          // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
          do_block: false,
          do_while: false,
          import_block: false,
          in_case_statement: false,
          // switch(..){ INSIDE HERE }
          in_case: false,
          // we're on the exact line with "case 0:"
          case_body: false,
          // the indented case-action block
          case_block: false,
          // the indented case-action block is wrapped with {}
          indentation_level: next_indent_level,
          alignment: 0,
          line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
          start_line_index: this._output.get_line_number(),
          ternary_depth: 0
        };
        return next_flags;
      };
      Beautifier.prototype._reset = function(source_text) {
        var baseIndentString = source_text.match(/^[\t ]*/)[0];
        this._last_last_text = "";
        this._output = new Output(this._options, baseIndentString);
        this._output.raw = this._options.test_output_raw;
        this._flag_store = [];
        this.set_mode(MODE.BlockStatement);
        var tokenizer = new Tokenizer(source_text, this._options);
        this._tokens = tokenizer.tokenize();
        return source_text;
      };
      Beautifier.prototype.beautify = function() {
        if (this._options.disabled) {
          return this._source_text;
        }
        var sweet_code;
        var source_text = this._reset(this._source_text);
        var eol = this._options.eol;
        if (this._options.eol === "auto") {
          eol = "\n";
          if (source_text && acorn.lineBreak.test(source_text || "")) {
            eol = source_text.match(acorn.lineBreak)[0];
          }
        }
        var current_token = this._tokens.next();
        while (current_token) {
          this.handle_token(current_token);
          this._last_last_text = this._flags.last_token.text;
          this._flags.last_token = current_token;
          current_token = this._tokens.next();
        }
        sweet_code = this._output.get_code(eol);
        return sweet_code;
      };
      Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
        if (current_token.type === TOKEN.START_EXPR) {
          this.handle_start_expr(current_token);
        } else if (current_token.type === TOKEN.END_EXPR) {
          this.handle_end_expr(current_token);
        } else if (current_token.type === TOKEN.START_BLOCK) {
          this.handle_start_block(current_token);
        } else if (current_token.type === TOKEN.END_BLOCK) {
          this.handle_end_block(current_token);
        } else if (current_token.type === TOKEN.WORD) {
          this.handle_word(current_token);
        } else if (current_token.type === TOKEN.RESERVED) {
          this.handle_word(current_token);
        } else if (current_token.type === TOKEN.SEMICOLON) {
          this.handle_semicolon(current_token);
        } else if (current_token.type === TOKEN.STRING) {
          this.handle_string(current_token);
        } else if (current_token.type === TOKEN.EQUALS) {
          this.handle_equals(current_token);
        } else if (current_token.type === TOKEN.OPERATOR) {
          this.handle_operator(current_token);
        } else if (current_token.type === TOKEN.COMMA) {
          this.handle_comma(current_token);
        } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
          this.handle_block_comment(current_token, preserve_statement_flags);
        } else if (current_token.type === TOKEN.COMMENT) {
          this.handle_comment(current_token, preserve_statement_flags);
        } else if (current_token.type === TOKEN.DOT) {
          this.handle_dot(current_token);
        } else if (current_token.type === TOKEN.EOF) {
          this.handle_eof(current_token);
        } else if (current_token.type === TOKEN.UNKNOWN) {
          this.handle_unknown(current_token, preserve_statement_flags);
        } else {
          this.handle_unknown(current_token, preserve_statement_flags);
        }
      };
      Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
        var newlines = current_token.newlines;
        var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);
        if (current_token.comments_before) {
          var comment_token = current_token.comments_before.next();
          while (comment_token) {
            this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
            this.handle_token(comment_token, preserve_statement_flags);
            comment_token = current_token.comments_before.next();
          }
        }
        if (keep_whitespace) {
          for (var i = 0; i < newlines; i += 1) {
            this.print_newline(i > 0, preserve_statement_flags);
          }
        } else {
          if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
            newlines = this._options.max_preserve_newlines;
          }
          if (this._options.preserve_newlines) {
            if (newlines > 1) {
              this.print_newline(false, preserve_statement_flags);
              for (var j = 1; j < newlines; j += 1) {
                this.print_newline(true, preserve_statement_flags);
              }
            }
          }
        }
      };
      var newline_restricted_tokens = ["async", "break", "continue", "return", "throw", "yield"];
      Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
        force_linewrap = force_linewrap === void 0 ? false : force_linewrap;
        if (this._output.just_added_newline()) {
          return;
        }
        var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
        var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) || in_array(current_token.text, positionable_operators);
        if (operatorLogicApplies) {
          var shouldPrintOperatorNewline = in_array(this._flags.last_token.text, positionable_operators) && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array(current_token.text, positionable_operators);
          shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
        }
        if (shouldPreserveOrForce) {
          this.print_newline(false, true);
        } else if (this._options.wrap_line_length) {
          if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
            return;
          }
          this._output.set_wrap_point();
        }
      };
      Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
        if (!preserve_statement_flags) {
          if (this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) {
            var next_token = this._tokens.peek();
            while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
              this.restore_mode();
            }
          }
        }
        if (this._output.add_new_line(force_newline)) {
          this._flags.multiline_frame = true;
        }
      };
      Beautifier.prototype.print_token_line_indentation = function(current_token) {
        if (this._output.just_added_newline()) {
          if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === "[" || is_array(this._flags.mode))) {
            this._output.current_line.set_indent(-1);
            this._output.current_line.push(current_token.whitespace_before);
            this._output.space_before_token = false;
          } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
            this._flags.line_indent_level = this._flags.indentation_level;
          }
        }
      };
      Beautifier.prototype.print_token = function(current_token) {
        if (this._output.raw) {
          this._output.add_raw_token(current_token);
          return;
        }
        if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA && this._output.just_added_newline()) {
          if (this._output.previous_line.last() === ",") {
            var popped = this._output.previous_line.pop();
            if (this._output.previous_line.is_empty()) {
              this._output.previous_line.push(popped);
              this._output.trim(true);
              this._output.current_line.pop();
              this._output.trim();
            }
            this.print_token_line_indentation(current_token);
            this._output.add_token(",");
            this._output.space_before_token = true;
          }
        }
        this.print_token_line_indentation(current_token);
        this._output.non_breaking_space = true;
        this._output.add_token(current_token.text);
        if (this._output.previous_token_wrapped) {
          this._flags.multiline_frame = true;
        }
      };
      Beautifier.prototype.indent = function() {
        this._flags.indentation_level += 1;
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      };
      Beautifier.prototype.deindent = function() {
        if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
          this._flags.indentation_level -= 1;
          this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
        }
      };
      Beautifier.prototype.set_mode = function(mode) {
        if (this._flags) {
          this._flag_store.push(this._flags);
          this._previous_flags = this._flags;
        } else {
          this._previous_flags = this.create_flags(null, mode);
        }
        this._flags = this.create_flags(this._previous_flags, mode);
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      };
      Beautifier.prototype.restore_mode = function() {
        if (this._flag_store.length > 0) {
          this._previous_flags = this._flags;
          this._flags = this._flag_store.pop();
          if (this._previous_flags.mode === MODE.Statement) {
            remove_redundant_indentation(this._output, this._previous_flags);
          }
          this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
        }
      };
      Beautifier.prototype.start_of_object_property = function() {
        return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
      };
      Beautifier.prototype.start_of_statement = function(current_token) {
        var start = false;
        start = start || reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD;
        start = start || reserved_word(this._flags.last_token, "do");
        start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
        start = start || reserved_word(this._flags.last_token, "else") && !(reserved_word(current_token, "if") && !current_token.comments_before);
        start = start || this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
        start = start || this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === "--" || current_token.text === "++") && this._last_last_text !== "function" && current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED;
        start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
        if (start) {
          this.set_mode(MODE.Statement);
          this.indent();
          this.handle_whitespace_and_comments(current_token, true);
          if (!this.start_of_object_property()) {
            this.allow_wrap_or_preserved_newline(
              current_token,
              reserved_array(current_token, ["do", "for", "if", "while"])
            );
          }
          return true;
        }
        return false;
      };
      Beautifier.prototype.handle_start_expr = function(current_token) {
        if (!this.start_of_statement(current_token)) {
          this.handle_whitespace_and_comments(current_token);
        }
        var next_mode = MODE.Expression;
        if (current_token.text === "[") {
          if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ")") {
            if (reserved_array(this._flags.last_token, line_starters)) {
              this._output.space_before_token = true;
            }
            this.print_token(current_token);
            this.set_mode(next_mode);
            this.indent();
            if (this._options.space_in_paren) {
              this._output.space_before_token = true;
            }
            return;
          }
          next_mode = MODE.ArrayLiteral;
          if (is_array(this._flags.mode)) {
            if (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) {
              if (!this._options.keep_array_indentation) {
                this.print_newline();
              }
            }
          }
          if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR, TOKEN.DOT])) {
            this._output.space_before_token = true;
          }
        } else {
          if (this._flags.last_token.type === TOKEN.RESERVED) {
            if (this._flags.last_token.text === "for") {
              this._output.space_before_token = this._options.space_before_conditional;
              next_mode = MODE.ForInitializer;
            } else if (in_array(this._flags.last_token.text, ["if", "while", "switch"])) {
              this._output.space_before_token = this._options.space_before_conditional;
              next_mode = MODE.Conditional;
            } else if (in_array(this._flags.last_word, ["await", "async"])) {
              this._output.space_before_token = true;
            } else if (this._flags.last_token.text === "import" && current_token.whitespace_before === "") {
              this._output.space_before_token = false;
            } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === "catch") {
              this._output.space_before_token = true;
            }
          } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
            if (!this.start_of_object_property()) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
          } else if (this._flags.last_token.type === TOKEN.WORD) {
            this._output.space_before_token = false;
            var peek_back_two = this._tokens.peek(-3);
            if (this._options.space_after_named_function && peek_back_two) {
              var peek_back_three = this._tokens.peek(-4);
              if (reserved_array(peek_back_two, ["async", "function"]) || peek_back_two.text === "*" && reserved_array(peek_back_three, ["async", "function"])) {
                this._output.space_before_token = true;
              } else if (this._flags.mode === MODE.ObjectLiteral) {
                if (peek_back_two.text === "{" || peek_back_two.text === "," || peek_back_two.text === "*" && (peek_back_three.text === "{" || peek_back_three.text === ",")) {
                  this._output.space_before_token = true;
                }
              } else if (this._flags.parent && this._flags.parent.class_start_block) {
                this._output.space_before_token = true;
              }
            }
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
          if (this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
            this._output.space_before_token = this._options.space_after_anon_function;
          }
        }
        if (this._flags.last_token.text === ";" || this._flags.last_token.type === TOKEN.START_BLOCK) {
          this.print_newline();
        } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === TOKEN.COMMA) {
          this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
        }
        this.print_token(current_token);
        this.set_mode(next_mode);
        if (this._options.space_in_paren) {
          this._output.space_before_token = true;
        }
        this.indent();
      };
      Beautifier.prototype.handle_end_expr = function(current_token) {
        while (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        this.handle_whitespace_and_comments(current_token);
        if (this._flags.multiline_frame) {
          this.allow_wrap_or_preserved_newline(
            current_token,
            current_token.text === "]" && is_array(this._flags.mode) && !this._options.keep_array_indentation
          );
        }
        if (this._options.space_in_paren) {
          if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
            this._output.trim();
            this._output.space_before_token = false;
          } else {
            this._output.space_before_token = true;
          }
        }
        this.deindent();
        this.print_token(current_token);
        this.restore_mode();
        remove_redundant_indentation(this._output, this._previous_flags);
        if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
          this._previous_flags.mode = MODE.Expression;
          this._flags.do_block = false;
          this._flags.do_while = false;
        }
      };
      Beautifier.prototype.handle_start_block = function(current_token) {
        this.handle_whitespace_and_comments(current_token);
        var next_token = this._tokens.peek();
        var second_token = this._tokens.peek(1);
        if (this._flags.last_word === "switch" && this._flags.last_token.type === TOKEN.END_EXPR) {
          this.set_mode(MODE.BlockStatement);
          this._flags.in_case_statement = true;
        } else if (this._flags.case_body) {
          this.set_mode(MODE.BlockStatement);
        } else if (second_token && (in_array(second_token.text, [":", ","]) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED]) || in_array(next_token.text, ["get", "set", "..."]) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))) {
          if (in_array(this._last_last_text, ["class", "interface"]) && !in_array(second_token.text, [":", ","])) {
            this.set_mode(MODE.BlockStatement);
          } else {
            this.set_mode(MODE.ObjectLiteral);
          }
        } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === "=>") {
          this.set_mode(MODE.BlockStatement);
        } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) || reserved_array(this._flags.last_token, ["return", "throw", "import", "default"])) {
          this.set_mode(MODE.ObjectLiteral);
        } else {
          this.set_mode(MODE.BlockStatement);
        }
        if (this._flags.last_token) {
          if (reserved_array(this._flags.last_token.previous, ["class", "extends"])) {
            this._flags.class_start_block = true;
          }
        }
        var empty_braces = !next_token.comments_before && next_token.text === "}";
        var empty_anonymous_function = empty_braces && this._flags.last_word === "function" && this._flags.last_token.type === TOKEN.END_EXPR;
        if (this._options.brace_preserve_inline) {
          var index = 0;
          var check_token = null;
          this._flags.inline_frame = true;
          do {
            index += 1;
            check_token = this._tokens.peek(index - 1);
            if (check_token.newlines) {
              this._flags.inline_frame = false;
              break;
            }
          } while (check_token.type !== TOKEN.EOF && !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
        }
        if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
          if (this._flags.last_token.type !== TOKEN.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== "else")) {
            this._output.space_before_token = true;
          } else {
            this.print_newline(false, true);
          }
        } else {
          if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
            if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
              this._output.space_before_token = true;
            }
            if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame) {
              this.allow_wrap_or_preserved_newline(current_token);
              this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
              this._flags.multiline_frame = false;
            }
          }
          if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
            if (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.SEMICOLON]) && !this._flags.inline_frame) {
              this.print_newline();
            } else {
              this._output.space_before_token = true;
            }
          }
        }
        this.print_token(current_token);
        this.indent();
        if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
          this.print_newline();
        }
      };
      Beautifier.prototype.handle_end_block = function(current_token) {
        this.handle_whitespace_and_comments(current_token);
        while (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;
        if (this._flags.inline_frame && !empty_braces) {
          this._output.space_before_token = true;
        } else if (this._options.brace_style === "expand") {
          if (!empty_braces) {
            this.print_newline();
          }
        } else {
          if (!empty_braces) {
            if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
              this._options.keep_array_indentation = false;
              this.print_newline();
              this._options.keep_array_indentation = true;
            } else {
              this.print_newline();
            }
          }
        }
        this.restore_mode();
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_word = function(current_token) {
        if (current_token.type === TOKEN.RESERVED) {
          if (in_array(current_token.text, ["set", "get"]) && this._flags.mode !== MODE.ObjectLiteral) {
            current_token.type = TOKEN.WORD;
          } else if (current_token.text === "import" && in_array(this._tokens.peek().text, ["(", "."])) {
            current_token.type = TOKEN.WORD;
          } else if (in_array(current_token.text, ["as", "from"]) && !this._flags.import_block) {
            current_token.type = TOKEN.WORD;
          } else if (this._flags.mode === MODE.ObjectLiteral) {
            var next_token = this._tokens.peek();
            if (next_token.text === ":") {
              current_token.type = TOKEN.WORD;
            }
          }
        }
        if (this.start_of_statement(current_token)) {
          if (reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD) {
            this._flags.declaration_statement = true;
          }
        } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) && this._flags.last_token.type !== TOKEN.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ["var", "let", "const", "set", "get"]))) {
          this.handle_whitespace_and_comments(current_token);
          this.print_newline();
        } else {
          this.handle_whitespace_and_comments(current_token);
        }
        if (this._flags.do_block && !this._flags.do_while) {
          if (reserved_word(current_token, "while")) {
            this._output.space_before_token = true;
            this.print_token(current_token);
            this._output.space_before_token = true;
            this._flags.do_while = true;
            return;
          } else {
            this.print_newline();
            this._flags.do_block = false;
          }
        }
        if (this._flags.if_block) {
          if (!this._flags.else_block && reserved_word(current_token, "else")) {
            this._flags.else_block = true;
          } else {
            while (this._flags.mode === MODE.Statement) {
              this.restore_mode();
            }
            this._flags.if_block = false;
            this._flags.else_block = false;
          }
        }
        if (this._flags.in_case_statement && reserved_array(current_token, ["case", "default"])) {
          this.print_newline();
          if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
            this.deindent();
          }
          this._flags.case_body = false;
          this.print_token(current_token);
          this._flags.in_case = true;
          return;
        }
        if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
          if (!this.start_of_object_property() && !// start of object property is different for numeric values with +/- prefix operators
          (in_array(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === MODE.ObjectLiteral)) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        }
        if (reserved_word(current_token, "function")) {
          if (in_array(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === TOKEN.OPERATOR)) {
            if (!this._output.just_added_blankline() && !current_token.comments_before) {
              this.print_newline();
              this.print_newline(true);
            }
          }
          if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
            if (reserved_array(this._flags.last_token, ["get", "set", "new", "export"]) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
              this._output.space_before_token = true;
            } else if (reserved_word(this._flags.last_token, "default") && this._last_last_text === "export") {
              this._output.space_before_token = true;
            } else if (this._flags.last_token.text === "declare") {
              this._output.space_before_token = true;
            } else {
              this.print_newline();
            }
          } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === "=") {
            this._output.space_before_token = true;
          } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) {
          } else {
            this.print_newline();
          }
          this.print_token(current_token);
          this._flags.last_word = current_token.text;
          return;
        }
        var prefix = "NONE";
        if (this._flags.last_token.type === TOKEN.END_BLOCK) {
          if (this._previous_flags.inline_frame) {
            prefix = "SPACE";
          } else if (!reserved_array(current_token, ["else", "catch", "finally", "from"])) {
            prefix = "NEWLINE";
          } else {
            if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
              prefix = "NEWLINE";
            } else {
              prefix = "SPACE";
              this._output.space_before_token = true;
            }
          }
        } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
          prefix = "NEWLINE";
        } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
          prefix = "SPACE";
        } else if (this._flags.last_token.type === TOKEN.STRING) {
          prefix = "NEWLINE";
        } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
          prefix = "SPACE";
        } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
          if (this._flags.inline_frame) {
            prefix = "SPACE";
          } else {
            prefix = "NEWLINE";
          }
        } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
          this._output.space_before_token = true;
          prefix = "NEWLINE";
        }
        if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
          if (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export") {
            prefix = "SPACE";
          } else {
            prefix = "NEWLINE";
          }
        }
        if (reserved_array(current_token, ["else", "catch", "finally"])) {
          if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
            this.print_newline();
          } else {
            this._output.trim(true);
            var line = this._output.current_line;
            if (line.last() !== "}") {
              this.print_newline();
            }
            this._output.space_before_token = true;
          }
        } else if (prefix === "NEWLINE") {
          if (reserved_array(this._flags.last_token, special_words)) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.text === "declare" && reserved_array(current_token, ["var", "let", "const"])) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
            if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ["var", "let", "const"])) && this._flags.last_token.text !== ":") {
              if (reserved_word(current_token, "if") && reserved_word(current_token.previous, "else")) {
                this._output.space_before_token = true;
              } else {
                this.print_newline();
              }
            }
          } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
            this.print_newline();
          }
        } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}") {
          this.print_newline();
        } else if (prefix === "SPACE") {
          this._output.space_before_token = true;
        }
        if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
          this._output.space_before_token = true;
        }
        this.print_token(current_token);
        this._flags.last_word = current_token.text;
        if (current_token.type === TOKEN.RESERVED) {
          if (current_token.text === "do") {
            this._flags.do_block = true;
          } else if (current_token.text === "if") {
            this._flags.if_block = true;
          } else if (current_token.text === "import") {
            this._flags.import_block = true;
          } else if (this._flags.import_block && reserved_word(current_token, "from")) {
            this._flags.import_block = false;
          }
        }
      };
      Beautifier.prototype.handle_semicolon = function(current_token) {
        if (this.start_of_statement(current_token)) {
          this._output.space_before_token = false;
        } else {
          this.handle_whitespace_and_comments(current_token);
        }
        var next_token = this._tokens.peek();
        while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
          this.restore_mode();
        }
        if (this._flags.import_block) {
          this._flags.import_block = false;
        }
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_string = function(current_token) {
        if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === "" && (current_token.previous.text === ")" || this._flags.last_token.type === TOKEN.WORD)) {
        } else if (this.start_of_statement(current_token)) {
          this._output.space_before_token = true;
        } else {
          this.handle_whitespace_and_comments(current_token);
          if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
            if (!this.start_of_object_property()) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
          } else if (current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN.END_EXPR && (current_token.previous.text === "]" || current_token.previous.text === ")") && current_token.newlines === 0) {
            this._output.space_before_token = true;
          } else {
            this.print_newline();
          }
        }
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_equals = function(current_token) {
        if (this.start_of_statement(current_token)) {
        } else {
          this.handle_whitespace_and_comments(current_token);
        }
        if (this._flags.declaration_statement) {
          this._flags.declaration_assignment = true;
        }
        this._output.space_before_token = true;
        this.print_token(current_token);
        this._output.space_before_token = true;
      };
      Beautifier.prototype.handle_comma = function(current_token) {
        this.handle_whitespace_and_comments(current_token, true);
        this.print_token(current_token);
        this._output.space_before_token = true;
        if (this._flags.declaration_statement) {
          if (is_expression(this._flags.parent.mode)) {
            this._flags.declaration_assignment = false;
          }
          if (this._flags.declaration_assignment) {
            this._flags.declaration_assignment = false;
            this.print_newline(false, true);
          } else if (this._options.comma_first) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
          if (this._flags.mode === MODE.Statement) {
            this.restore_mode();
          }
          if (!this._flags.inline_frame) {
            this.print_newline();
          }
        } else if (this._options.comma_first) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      };
      Beautifier.prototype.handle_operator = function(current_token) {
        var isGeneratorAsterisk = current_token.text === "*" && (reserved_array(this._flags.last_token, ["function", "yield"]) || in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]));
        var isUnary = in_array(current_token.text, ["-", "+"]) && (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) || in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === ",");
        if (this.start_of_statement(current_token)) {
        } else {
          var preserve_statement_flags = !isGeneratorAsterisk;
          this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
        }
        if (current_token.text === "*" && this._flags.last_token.type === TOKEN.DOT) {
          this.print_token(current_token);
          return;
        }
        if (current_token.text === "::") {
          this.print_token(current_token);
          return;
        }
        if (in_array(current_token.text, ["-", "+"]) && this.start_of_object_property()) {
          this.print_token(current_token);
          return;
        }
        if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        if (current_token.text === ":" && this._flags.in_case) {
          this.print_token(current_token);
          this._flags.in_case = false;
          this._flags.case_body = true;
          if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
            this.indent();
            this.print_newline();
            this._flags.case_block = false;
          } else {
            this._flags.case_block = true;
            this._output.space_before_token = true;
          }
          return;
        }
        var space_before = true;
        var space_after = true;
        var in_ternary = false;
        if (current_token.text === ":") {
          if (this._flags.ternary_depth === 0) {
            space_before = false;
          } else {
            this._flags.ternary_depth -= 1;
            in_ternary = true;
          }
        } else if (current_token.text === "?") {
          this._flags.ternary_depth += 1;
        }
        if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
          var isColon = current_token.text === ":";
          var isTernaryColon = isColon && in_ternary;
          var isOtherColon = isColon && !in_ternary;
          switch (this._options.operator_position) {
            case OPERATOR_POSITION.before_newline:
              this._output.space_before_token = !isOtherColon;
              this.print_token(current_token);
              if (!isColon || isTernaryColon) {
                this.allow_wrap_or_preserved_newline(current_token);
              }
              this._output.space_before_token = true;
              return;
            case OPERATOR_POSITION.after_newline:
              this._output.space_before_token = true;
              if (!isColon || isTernaryColon) {
                if (this._tokens.peek().newlines) {
                  this.print_newline(false, true);
                } else {
                  this.allow_wrap_or_preserved_newline(current_token);
                }
              } else {
                this._output.space_before_token = false;
              }
              this.print_token(current_token);
              this._output.space_before_token = true;
              return;
            case OPERATOR_POSITION.preserve_newline:
              if (!isOtherColon) {
                this.allow_wrap_or_preserved_newline(current_token);
              }
              space_before = !(this._output.just_added_newline() || isOtherColon);
              this._output.space_before_token = space_before;
              this.print_token(current_token);
              this._output.space_before_token = true;
              return;
          }
        }
        if (isGeneratorAsterisk) {
          this.allow_wrap_or_preserved_newline(current_token);
          space_before = false;
          var next_token = this._tokens.peek();
          space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
        } else if (current_token.text === "...") {
          this.allow_wrap_or_preserved_newline(current_token);
          space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
          space_after = false;
        } else if (in_array(current_token.text, ["--", "++", "!", "~"]) || isUnary) {
          if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
          space_before = false;
          space_after = false;
          if (current_token.newlines && (current_token.text === "--" || current_token.text === "++" || current_token.text === "~")) {
            var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
            if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
              this.restore_mode();
            }
            this.print_newline(new_line_needed, true);
          }
          if (this._flags.last_token.text === ";" && is_expression(this._flags.mode)) {
            space_before = true;
          }
          if (this._flags.last_token.type === TOKEN.RESERVED) {
            space_before = true;
          } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
            space_before = !(this._flags.last_token.text === "]" && (current_token.text === "--" || current_token.text === "++"));
          } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
            space_before = in_array(current_token.text, ["--", "-", "++", "+"]) && in_array(this._flags.last_token.text, ["--", "-", "++", "+"]);
            if (in_array(current_token.text, ["+", "-"]) && in_array(this._flags.last_token.text, ["--", "++"])) {
              space_after = true;
            }
          }
          if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";")) {
            this.print_newline();
          }
        }
        this._output.space_before_token = this._output.space_before_token || space_before;
        this.print_token(current_token);
        this._output.space_before_token = space_after;
      };
      Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
        if (this._output.raw) {
          this._output.add_raw_token(current_token);
          if (current_token.directives && current_token.directives.preserve === "end") {
            this._output.raw = this._options.test_output_raw;
          }
          return;
        }
        if (current_token.directives) {
          this.print_newline(false, preserve_statement_flags);
          this.print_token(current_token);
          if (current_token.directives.preserve === "start") {
            this._output.raw = true;
          }
          this.print_newline(false, true);
          return;
        }
        if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
          this._output.space_before_token = true;
          this.print_token(current_token);
          this._output.space_before_token = true;
          return;
        } else {
          this.print_block_commment(current_token, preserve_statement_flags);
        }
      };
      Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
        var lines2 = split_linebreaks(current_token.text);
        var j;
        var javadoc = false;
        var starless = false;
        var lastIndent = current_token.whitespace_before;
        var lastIndentLength = lastIndent.length;
        this.print_newline(false, preserve_statement_flags);
        this.print_token_line_indentation(current_token);
        this._output.add_token(lines2[0]);
        this.print_newline(false, preserve_statement_flags);
        if (lines2.length > 1) {
          lines2 = lines2.slice(1);
          javadoc = all_lines_start_with(lines2, "*");
          starless = each_line_matches_indent(lines2, lastIndent);
          if (javadoc) {
            this._flags.alignment = 1;
          }
          for (j = 0; j < lines2.length; j++) {
            if (javadoc) {
              this.print_token_line_indentation(current_token);
              this._output.add_token(ltrim(lines2[j]));
            } else if (starless && lines2[j]) {
              this.print_token_line_indentation(current_token);
              this._output.add_token(lines2[j].substring(lastIndentLength));
            } else {
              this._output.current_line.set_indent(-1);
              this._output.add_token(lines2[j]);
            }
            this.print_newline(false, preserve_statement_flags);
          }
          this._flags.alignment = 0;
        }
      };
      Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
        if (current_token.newlines) {
          this.print_newline(false, preserve_statement_flags);
        } else {
          this._output.trim(true);
        }
        this._output.space_before_token = true;
        this.print_token(current_token);
        this.print_newline(false, preserve_statement_flags);
      };
      Beautifier.prototype.handle_dot = function(current_token) {
        if (this.start_of_statement(current_token)) {
        } else {
          this.handle_whitespace_and_comments(current_token, true);
        }
        if (this._flags.last_token.text.match("^[0-9]+$")) {
          this._output.space_before_token = true;
        }
        if (reserved_array(this._flags.last_token, special_words)) {
          this._output.space_before_token = false;
        } else {
          this.allow_wrap_or_preserved_newline(
            current_token,
            this._flags.last_token.text === ")" && this._options.break_chained_methods
          );
        }
        if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
          this.deindent();
        }
        this.print_token(current_token);
      };
      Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
        this.print_token(current_token);
        if (current_token.text[current_token.text.length - 1] === "\n") {
          this.print_newline(false, preserve_statement_flags);
        }
      };
      Beautifier.prototype.handle_eof = function(current_token) {
        while (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        this.handle_whitespace_and_comments(current_token);
      };
      module.exports.Beautifier = Beautifier;
    }
  });

  // node_modules/js-beautify/js/src/javascript/index.js
  var require_javascript = __commonJS({
    "node_modules/js-beautify/js/src/javascript/index.js"(exports, module) {
      "use strict";
      var Beautifier = require_beautifier().Beautifier;
      var Options = require_options2().Options;
      function js_beautify(js_source_text, options) {
        var beautifier = new Beautifier(js_source_text, options);
        return beautifier.beautify();
      }
      module.exports = js_beautify;
      module.exports.defaultOptions = function() {
        return new Options();
      };
    }
  });

  // node_modules/js-beautify/js/src/css/options.js
  var require_options3 = __commonJS({
    "node_modules/js-beautify/js/src/css/options.js"(exports, module) {
      "use strict";
      var BaseOptions = require_options().Options;
      function Options(options) {
        BaseOptions.call(this, options, "css");
        this.selector_separator_newline = this._get_boolean("selector_separator_newline", true);
        this.newline_between_rules = this._get_boolean("newline_between_rules", true);
        var space_around_selector_separator = this._get_boolean("space_around_selector_separator");
        this.space_around_combinator = this._get_boolean("space_around_combinator") || space_around_selector_separator;
        var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
        this.brace_style = "collapse";
        for (var bs = 0; bs < brace_style_split.length; bs++) {
          if (brace_style_split[bs] !== "expand") {
            this.brace_style = "collapse";
          } else {
            this.brace_style = brace_style_split[bs];
          }
        }
      }
      Options.prototype = new BaseOptions();
      module.exports.Options = Options;
    }
  });

  // node_modules/js-beautify/js/src/css/beautifier.js
  var require_beautifier2 = __commonJS({
    "node_modules/js-beautify/js/src/css/beautifier.js"(exports, module) {
      "use strict";
      var Options = require_options3().Options;
      var Output = require_output().Output;
      var InputScanner = require_inputscanner().InputScanner;
      var Directives = require_directives().Directives;
      var directives_core = new Directives(/\/\*/, /\*\//);
      var lineBreak = /\r\n|[\r\n]/;
      var allLineBreaks = /\r\n|[\r\n]/g;
      var whitespaceChar = /\s/;
      var whitespacePattern = /(?:\s|\n)+/g;
      var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
      var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
      function Beautifier(source_text, options) {
        this._source_text = source_text || "";
        this._options = new Options(options);
        this._ch = null;
        this._input = null;
        this.NESTED_AT_RULE = {
          "page": true,
          "font-face": true,
          "keyframes": true,
          // also in CONDITIONAL_GROUP_RULE below
          "media": true,
          "supports": true,
          "document": true
        };
        this.CONDITIONAL_GROUP_RULE = {
          "media": true,
          "supports": true,
          "document": true
        };
        this.NON_SEMICOLON_NEWLINE_PROPERTY = [
          "grid-template-areas",
          "grid-template"
        ];
      }
      Beautifier.prototype.eatString = function(endChars) {
        var result = "";
        this._ch = this._input.next();
        while (this._ch) {
          result += this._ch;
          if (this._ch === "\\") {
            result += this._input.next();
          } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
            break;
          }
          this._ch = this._input.next();
        }
        return result;
      };
      Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
        var result = whitespaceChar.test(this._input.peek());
        var newline_count = 0;
        while (whitespaceChar.test(this._input.peek())) {
          this._ch = this._input.next();
          if (allowAtLeastOneNewLine && this._ch === "\n") {
            if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
              newline_count++;
              this._output.add_new_line(true);
            }
          }
        }
        return result;
      };
      Beautifier.prototype.foundNestedPseudoClass = function() {
        var openParen = 0;
        var i = 1;
        var ch = this._input.peek(i);
        while (ch) {
          if (ch === "{") {
            return true;
          } else if (ch === "(") {
            openParen += 1;
          } else if (ch === ")") {
            if (openParen === 0) {
              return false;
            }
            openParen -= 1;
          } else if (ch === ";" || ch === "}") {
            return false;
          }
          i++;
          ch = this._input.peek(i);
        }
        return false;
      };
      Beautifier.prototype.print_string = function(output_string) {
        this._output.set_indent(this._indentLevel);
        this._output.non_breaking_space = true;
        this._output.add_token(output_string);
      };
      Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
        if (isAfterSpace) {
          this._output.space_before_token = true;
        }
      };
      Beautifier.prototype.indent = function() {
        this._indentLevel++;
      };
      Beautifier.prototype.outdent = function() {
        if (this._indentLevel > 0) {
          this._indentLevel--;
        }
      };
      Beautifier.prototype.beautify = function() {
        if (this._options.disabled) {
          return this._source_text;
        }
        var source_text = this._source_text;
        var eol = this._options.eol;
        if (eol === "auto") {
          eol = "\n";
          if (source_text && lineBreak.test(source_text || "")) {
            eol = source_text.match(lineBreak)[0];
          }
        }
        source_text = source_text.replace(allLineBreaks, "\n");
        var baseIndentString = source_text.match(/^[\t ]*/)[0];
        this._output = new Output(this._options, baseIndentString);
        this._input = new InputScanner(source_text);
        this._indentLevel = 0;
        this._nestedLevel = 0;
        this._ch = null;
        var parenLevel = 0;
        var insideRule = false;
        var insidePropertyValue = false;
        var enteringConditionalGroup = false;
        var insideNonNestedAtRule = false;
        var insideScssMap = false;
        var topCharacter = this._ch;
        var insideNonSemiColonValues = false;
        var whitespace;
        var isAfterSpace;
        var previous_ch;
        while (true) {
          whitespace = this._input.read(whitespacePattern);
          isAfterSpace = whitespace !== "";
          previous_ch = topCharacter;
          this._ch = this._input.next();
          if (this._ch === "\\" && this._input.hasNext()) {
            this._ch += this._input.next();
          }
          topCharacter = this._ch;
          if (!this._ch) {
            break;
          } else if (this._ch === "/" && this._input.peek() === "*") {
            this._output.add_new_line();
            this._input.back();
            var comment = this._input.read(block_comment_pattern);
            var directives = directives_core.get_directives(comment);
            if (directives && directives.ignore === "start") {
              comment += directives_core.readIgnored(this._input);
            }
            this.print_string(comment);
            this.eatWhitespace(true);
            this._output.add_new_line();
          } else if (this._ch === "/" && this._input.peek() === "/") {
            this._output.space_before_token = true;
            this._input.back();
            this.print_string(this._input.read(comment_pattern));
            this.eatWhitespace(true);
          } else if (this._ch === "$") {
            this.preserveSingleSpace(isAfterSpace);
            this.print_string(this._ch);
            var variable = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
            if (variable.match(/[ :]$/)) {
              variable = this.eatString(": ").replace(/\s+$/, "");
              this.print_string(variable);
              this._output.space_before_token = true;
            }
            if (parenLevel === 0 && variable.indexOf(":") !== -1) {
              insidePropertyValue = true;
              this.indent();
            }
          } else if (this._ch === "@") {
            this.preserveSingleSpace(isAfterSpace);
            if (this._input.peek() === "{") {
              this.print_string(this._ch + this.eatString("}"));
            } else {
              this.print_string(this._ch);
              var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
              if (variableOrRule.match(/[ :]$/)) {
                variableOrRule = this.eatString(": ").replace(/\s+$/, "");
                this.print_string(variableOrRule);
                this._output.space_before_token = true;
              }
              if (parenLevel === 0 && variableOrRule.indexOf(":") !== -1) {
                insidePropertyValue = true;
                this.indent();
              } else if (variableOrRule in this.NESTED_AT_RULE) {
                this._nestedLevel += 1;
                if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
                  enteringConditionalGroup = true;
                }
              } else if (parenLevel === 0 && !insidePropertyValue) {
                insideNonNestedAtRule = true;
              }
            }
          } else if (this._ch === "#" && this._input.peek() === "{") {
            this.preserveSingleSpace(isAfterSpace);
            this.print_string(this._ch + this.eatString("}"));
          } else if (this._ch === "{") {
            if (insidePropertyValue) {
              insidePropertyValue = false;
              this.outdent();
            }
            insideNonNestedAtRule = false;
            if (enteringConditionalGroup) {
              enteringConditionalGroup = false;
              insideRule = this._indentLevel >= this._nestedLevel;
            } else {
              insideRule = this._indentLevel >= this._nestedLevel - 1;
            }
            if (this._options.newline_between_rules && insideRule) {
              if (this._output.previous_line && this._output.previous_line.item(-1) !== "{") {
                this._output.ensure_empty_line_above("/", ",");
              }
            }
            this._output.space_before_token = true;
            if (this._options.brace_style === "expand") {
              this._output.add_new_line();
              this.print_string(this._ch);
              this.indent();
              this._output.set_indent(this._indentLevel);
            } else {
              if (previous_ch === "(") {
                this._output.space_before_token = false;
              } else if (previous_ch !== ",") {
                this.indent();
              }
              this.print_string(this._ch);
            }
            this.eatWhitespace(true);
            this._output.add_new_line();
          } else if (this._ch === "}") {
            this.outdent();
            this._output.add_new_line();
            if (previous_ch === "{") {
              this._output.trim(true);
            }
            if (insidePropertyValue) {
              this.outdent();
              insidePropertyValue = false;
            }
            this.print_string(this._ch);
            insideRule = false;
            if (this._nestedLevel) {
              this._nestedLevel--;
            }
            this.eatWhitespace(true);
            this._output.add_new_line();
            if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
              if (this._input.peek() !== "}") {
                this._output.add_new_line(true);
              }
            }
            if (this._input.peek() === ")") {
              this._output.trim(true);
              if (this._options.brace_style === "expand") {
                this._output.add_new_line(true);
              }
            }
          } else if (this._ch === ":") {
            for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
              if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
                insideNonSemiColonValues = true;
                break;
              }
            }
            if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideNonNestedAtRule && parenLevel === 0) {
              this.print_string(":");
              if (!insidePropertyValue) {
                insidePropertyValue = true;
                this._output.space_before_token = true;
                this.eatWhitespace(true);
                this.indent();
              }
            } else {
              if (this._input.lookBack(" ")) {
                this._output.space_before_token = true;
              }
              if (this._input.peek() === ":") {
                this._ch = this._input.next();
                this.print_string("::");
              } else {
                this.print_string(":");
              }
            }
          } else if (this._ch === '"' || this._ch === "'") {
            var preserveQuoteSpace = previous_ch === '"' || previous_ch === "'";
            this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
            this.print_string(this._ch + this.eatString(this._ch));
            this.eatWhitespace(true);
          } else if (this._ch === ";") {
            insideNonSemiColonValues = false;
            if (parenLevel === 0) {
              if (insidePropertyValue) {
                this.outdent();
                insidePropertyValue = false;
              }
              insideNonNestedAtRule = false;
              this.print_string(this._ch);
              this.eatWhitespace(true);
              if (this._input.peek() !== "/") {
                this._output.add_new_line();
              }
            } else {
              this.print_string(this._ch);
              this.eatWhitespace(true);
              this._output.space_before_token = true;
            }
          } else if (this._ch === "(") {
            if (this._input.lookBack("url")) {
              this.print_string(this._ch);
              this.eatWhitespace();
              parenLevel++;
              this.indent();
              this._ch = this._input.next();
              if (this._ch === ")" || this._ch === '"' || this._ch === "'") {
                this._input.back();
              } else if (this._ch) {
                this.print_string(this._ch + this.eatString(")"));
                if (parenLevel) {
                  parenLevel--;
                  this.outdent();
                }
              }
            } else {
              var space_needed = false;
              if (this._input.lookBack("with")) {
                space_needed = true;
              }
              this.preserveSingleSpace(isAfterSpace || space_needed);
              this.print_string(this._ch);
              if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
                this._output.add_new_line();
                insideScssMap = true;
              } else {
                this.eatWhitespace();
                parenLevel++;
                this.indent();
              }
            }
          } else if (this._ch === ")") {
            if (parenLevel) {
              parenLevel--;
              this.outdent();
            }
            if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
              insideScssMap = false;
              this.outdent();
              this._output.add_new_line();
            }
            this.print_string(this._ch);
          } else if (this._ch === ",") {
            this.print_string(this._ch);
            this.eatWhitespace(true);
            if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideNonNestedAtRule) {
              this._output.add_new_line();
            } else {
              this._output.space_before_token = true;
            }
          } else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !insidePropertyValue && parenLevel === 0) {
            if (this._options.space_around_combinator) {
              this._output.space_before_token = true;
              this.print_string(this._ch);
              this._output.space_before_token = true;
            } else {
              this.print_string(this._ch);
              this.eatWhitespace();
              if (this._ch && whitespaceChar.test(this._ch)) {
                this._ch = "";
              }
            }
          } else if (this._ch === "]") {
            this.print_string(this._ch);
          } else if (this._ch === "[") {
            this.preserveSingleSpace(isAfterSpace);
            this.print_string(this._ch);
          } else if (this._ch === "=") {
            this.eatWhitespace();
            this.print_string("=");
            if (whitespaceChar.test(this._ch)) {
              this._ch = "";
            }
          } else if (this._ch === "!" && !this._input.lookBack("\\")) {
            this._output.space_before_token = true;
            this.print_string(this._ch);
          } else {
            var preserveAfterSpace = previous_ch === '"' || previous_ch === "'";
            this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
            this.print_string(this._ch);
            if (!this._output.just_added_newline() && this._input.peek() === "\n" && insideNonSemiColonValues) {
              this._output.add_new_line();
            }
          }
        }
        var sweetCode = this._output.get_code(eol);
        return sweetCode;
      };
      module.exports.Beautifier = Beautifier;
    }
  });

  // node_modules/js-beautify/js/src/css/index.js
  var require_css = __commonJS({
    "node_modules/js-beautify/js/src/css/index.js"(exports, module) {
      "use strict";
      var Beautifier = require_beautifier2().Beautifier;
      var Options = require_options3().Options;
      function css_beautify(source_text, options) {
        var beautifier = new Beautifier(source_text, options);
        return beautifier.beautify();
      }
      module.exports = css_beautify;
      module.exports.defaultOptions = function() {
        return new Options();
      };
    }
  });

  // node_modules/js-beautify/js/src/html/options.js
  var require_options4 = __commonJS({
    "node_modules/js-beautify/js/src/html/options.js"(exports, module) {
      "use strict";
      var BaseOptions = require_options().Options;
      function Options(options) {
        BaseOptions.call(this, options, "html");
        if (this.templating.length === 1 && this.templating[0] === "auto") {
          this.templating = ["django", "erb", "handlebars", "php"];
        }
        this.indent_inner_html = this._get_boolean("indent_inner_html");
        this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true);
        this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true);
        this.indent_handlebars = this._get_boolean("indent_handlebars", true);
        this.wrap_attributes = this._get_selection(
          "wrap_attributes",
          ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
        );
        this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2);
        this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size);
        this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]);
        this.inline = this._get_array("inline", [
          "a",
          "abbr",
          "area",
          "audio",
          "b",
          "bdi",
          "bdo",
          "br",
          "button",
          "canvas",
          "cite",
          "code",
          "data",
          "datalist",
          "del",
          "dfn",
          "em",
          "embed",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "map",
          "mark",
          "math",
          "meter",
          "noscript",
          "object",
          "output",
          "progress",
          "q",
          "ruby",
          "s",
          "samp",
          /* 'script', */
          "select",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "svg",
          "template",
          "textarea",
          "time",
          "u",
          "var",
          "video",
          "wbr",
          "text",
          // obsolete inline tags
          "acronym",
          "big",
          "strike",
          "tt"
        ]);
        this.inline_custom_elements = this._get_boolean("inline_custom_elements", true);
        this.void_elements = this._get_array("void_elements", [
          // HTLM void elements - aka self-closing tags - aka singletons
          // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
          "area",
          "base",
          "br",
          "col",
          "embed",
          "hr",
          "img",
          "input",
          "keygen",
          "link",
          "menuitem",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
          // NOTE: Optional tags are too complex for a simple list
          // they are hard coded in _do_optional_end_element
          // Doctype and xml elements
          "!doctype",
          "?xml",
          // obsolete tags
          // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
          // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
          "basefont",
          "isindex"
        ]);
        this.unformatted = this._get_array("unformatted", []);
        this.content_unformatted = this._get_array("content_unformatted", [
          "pre",
          "textarea"
        ]);
        this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter");
        this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
      }
      Options.prototype = new BaseOptions();
      module.exports.Options = Options;
    }
  });

  // node_modules/js-beautify/js/src/html/tokenizer.js
  var require_tokenizer3 = __commonJS({
    "node_modules/js-beautify/js/src/html/tokenizer.js"(exports, module) {
      "use strict";
      var BaseTokenizer = require_tokenizer().Tokenizer;
      var BASETOKEN = require_tokenizer().TOKEN;
      var Directives = require_directives().Directives;
      var TemplatablePattern = require_templatablepattern().TemplatablePattern;
      var Pattern = require_pattern().Pattern;
      var TOKEN = {
        TAG_OPEN: "TK_TAG_OPEN",
        TAG_CLOSE: "TK_TAG_CLOSE",
        CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
        CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
        ATTRIBUTE: "TK_ATTRIBUTE",
        EQUALS: "TK_EQUALS",
        VALUE: "TK_VALUE",
        COMMENT: "TK_COMMENT",
        TEXT: "TK_TEXT",
        UNKNOWN: "TK_UNKNOWN",
        START: BASETOKEN.START,
        RAW: BASETOKEN.RAW,
        EOF: BASETOKEN.EOF
      };
      var directives_core = new Directives(/<\!--/, /-->/);
      var Tokenizer = function(input_string, options) {
        BaseTokenizer.call(this, input_string, options);
        this._current_tag_name = "";
        var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
        var pattern_reader = new Pattern(this._input);
        this.__patterns = {
          word: templatable_reader.until(/[\n\r\t <]/),
          word_control_flow_close_excluded: templatable_reader.until(/[\n\r\t <}]/),
          single_quote: templatable_reader.until_after(/'/),
          double_quote: templatable_reader.until_after(/"/),
          attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
          element_name: templatable_reader.until(/[\n\r\t >\/]/),
          angular_control_flow_start: pattern_reader.matching(/\@[a-zA-Z]+[^({]*[({]/),
          handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
          handlebars_open: pattern_reader.until(/[\n\r\t }]/),
          handlebars_raw_close: pattern_reader.until(/}}/),
          comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
          cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
          // https://en.wikipedia.org/wiki/Conditional_comment
          conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
          processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
        };
        if (this._options.indent_handlebars) {
          this.__patterns.word = this.__patterns.word.exclude("handlebars");
          this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars");
        }
        this._unformatted_content_delimiter = null;
        if (this._options.unformatted_content_delimiter) {
          var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
          this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
        }
      };
      Tokenizer.prototype = new BaseTokenizer();
      Tokenizer.prototype._is_comment = function(current_token) {
        return false;
      };
      Tokenizer.prototype._is_opening = function(current_token) {
        return current_token.type === TOKEN.TAG_OPEN || current_token.type === TOKEN.CONTROL_FLOW_OPEN;
      };
      Tokenizer.prototype._is_closing = function(current_token, open_token) {
        return current_token.type === TOKEN.TAG_CLOSE && (open_token && ((current_token.text === ">" || current_token.text === "/>") && open_token.text[0] === "<" || current_token.text === "}}" && open_token.text[0] === "{" && open_token.text[1] === "{")) || current_token.type === TOKEN.CONTROL_FLOW_CLOSE && (current_token.text === "}" && open_token.text.endsWith("{"));
      };
      Tokenizer.prototype._reset = function() {
        this._current_tag_name = "";
      };
      Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
        var token = null;
        this._readWhitespace();
        var c = this._input.peek();
        if (c === null) {
          return this._create_token(TOKEN.EOF, "");
        }
        token = token || this._read_open_handlebars(c, open_token);
        token = token || this._read_attribute(c, previous_token, open_token);
        token = token || this._read_close(c, open_token);
        token = token || this._read_script_and_style(c, previous_token);
        token = token || this._read_control_flows(c, open_token);
        token = token || this._read_raw_content(c, previous_token, open_token);
        token = token || this._read_content_word(c, open_token);
        token = token || this._read_comment_or_cdata(c);
        token = token || this._read_processing(c);
        token = token || this._read_open(c, open_token);
        token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
        return token;
      };
      Tokenizer.prototype._read_comment_or_cdata = function(c) {
        var token = null;
        var resulting_string = null;
        var directives = null;
        if (c === "<") {
          var peek1 = this._input.peek(1);
          if (peek1 === "!") {
            resulting_string = this.__patterns.comment.read();
            if (resulting_string) {
              directives = directives_core.get_directives(resulting_string);
              if (directives && directives.ignore === "start") {
                resulting_string += directives_core.readIgnored(this._input);
              }
            } else {
              resulting_string = this.__patterns.cdata.read();
            }
          }
          if (resulting_string) {
            token = this._create_token(TOKEN.COMMENT, resulting_string);
            token.directives = directives;
          }
        }
        return token;
      };
      Tokenizer.prototype._read_processing = function(c) {
        var token = null;
        var resulting_string = null;
        var directives = null;
        if (c === "<") {
          var peek1 = this._input.peek(1);
          if (peek1 === "!" || peek1 === "?") {
            resulting_string = this.__patterns.conditional_comment.read();
            resulting_string = resulting_string || this.__patterns.processing.read();
          }
          if (resulting_string) {
            token = this._create_token(TOKEN.COMMENT, resulting_string);
            token.directives = directives;
          }
        }
        return token;
      };
      Tokenizer.prototype._read_open = function(c, open_token) {
        var resulting_string = null;
        var token = null;
        if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
          if (c === "<") {
            resulting_string = this._input.next();
            if (this._input.peek() === "/") {
              resulting_string += this._input.next();
            }
            resulting_string += this.__patterns.element_name.read();
            token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
          }
        }
        return token;
      };
      Tokenizer.prototype._read_open_handlebars = function(c, open_token) {
        var resulting_string = null;
        var token = null;
        if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
          if ((this._options.templating.includes("angular") || this._options.indent_handlebars) && c === "{" && this._input.peek(1) === "{") {
            if (this._options.indent_handlebars && this._input.peek(2) === "!") {
              resulting_string = this.__patterns.handlebars_comment.read();
              resulting_string = resulting_string || this.__patterns.handlebars.read();
              token = this._create_token(TOKEN.COMMENT, resulting_string);
            } else {
              resulting_string = this.__patterns.handlebars_open.read();
              token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
            }
          }
        }
        return token;
      };
      Tokenizer.prototype._read_control_flows = function(c, open_token) {
        var resulting_string = "";
        var token = null;
        if (!this._options.templating.includes("angular")) {
          return token;
        }
        if (c === "@") {
          resulting_string = this.__patterns.angular_control_flow_start.read();
          if (resulting_string === "") {
            return token;
          }
          var opening_parentheses_count = resulting_string.endsWith("(") ? 1 : 0;
          var closing_parentheses_count = 0;
          while (!(resulting_string.endsWith("{") && opening_parentheses_count === closing_parentheses_count)) {
            var next_char = this._input.next();
            if (next_char === null) {
              break;
            } else if (next_char === "(") {
              opening_parentheses_count++;
            } else if (next_char === ")") {
              closing_parentheses_count++;
            }
            resulting_string += next_char;
          }
          token = this._create_token(TOKEN.CONTROL_FLOW_OPEN, resulting_string);
        } else if (c === "}" && open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
          resulting_string = this._input.next();
          token = this._create_token(TOKEN.CONTROL_FLOW_CLOSE, resulting_string);
        }
        return token;
      };
      Tokenizer.prototype._read_close = function(c, open_token) {
        var resulting_string = null;
        var token = null;
        if (open_token && open_token.type === TOKEN.TAG_OPEN) {
          if (open_token.text[0] === "<" && (c === ">" || c === "/" && this._input.peek(1) === ">")) {
            resulting_string = this._input.next();
            if (c === "/") {
              resulting_string += this._input.next();
            }
            token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
          } else if (open_token.text[0] === "{" && c === "}" && this._input.peek(1) === "}") {
            this._input.next();
            this._input.next();
            token = this._create_token(TOKEN.TAG_CLOSE, "}}");
          }
        }
        return token;
      };
      Tokenizer.prototype._read_attribute = function(c, previous_token, open_token) {
        var token = null;
        var resulting_string = "";
        if (open_token && open_token.text[0] === "<") {
          if (c === "=") {
            token = this._create_token(TOKEN.EQUALS, this._input.next());
          } else if (c === '"' || c === "'") {
            var content = this._input.next();
            if (c === '"') {
              content += this.__patterns.double_quote.read();
            } else {
              content += this.__patterns.single_quote.read();
            }
            token = this._create_token(TOKEN.VALUE, content);
          } else {
            resulting_string = this.__patterns.attribute.read();
            if (resulting_string) {
              if (previous_token.type === TOKEN.EQUALS) {
                token = this._create_token(TOKEN.VALUE, resulting_string);
              } else {
                token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
              }
            }
          }
        }
        return token;
      };
      Tokenizer.prototype._is_content_unformatted = function(tag_name) {
        return this._options.void_elements.indexOf(tag_name) === -1 && (this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
      };
      Tokenizer.prototype._read_raw_content = function(c, previous_token, open_token) {
        var resulting_string = "";
        if (open_token && open_token.text[0] === "{") {
          resulting_string = this.__patterns.handlebars_raw_close.read();
        } else if (previous_token.type === TOKEN.TAG_CLOSE && previous_token.opened.text[0] === "<" && previous_token.text[0] !== "/") {
          var tag_name = previous_token.opened.text.substr(1).toLowerCase();
          if (this._is_content_unformatted(tag_name)) {
            resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
          }
        }
        if (resulting_string) {
          return this._create_token(TOKEN.TEXT, resulting_string);
        }
        return null;
      };
      Tokenizer.prototype._read_script_and_style = function(c, previous_token) {
        if (previous_token.type === TOKEN.TAG_CLOSE && previous_token.opened.text[0] === "<" && previous_token.text[0] !== "/") {
          var tag_name = previous_token.opened.text.substr(1).toLowerCase();
          if (tag_name === "script" || tag_name === "style") {
            var token = this._read_comment_or_cdata(c);
            if (token) {
              token.type = TOKEN.TEXT;
              return token;
            }
            var resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
            if (resulting_string) {
              return this._create_token(TOKEN.TEXT, resulting_string);
            }
          }
        }
        return null;
      };
      Tokenizer.prototype._read_content_word = function(c, open_token) {
        var resulting_string = "";
        if (this._options.unformatted_content_delimiter) {
          if (c === this._options.unformatted_content_delimiter[0]) {
            resulting_string = this.__patterns.unformatted_content_delimiter.read();
          }
        }
        if (!resulting_string) {
          resulting_string = open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read();
        }
        if (resulting_string) {
          return this._create_token(TOKEN.TEXT, resulting_string);
        }
        return null;
      };
      module.exports.Tokenizer = Tokenizer;
      module.exports.TOKEN = TOKEN;
    }
  });

  // node_modules/js-beautify/js/src/html/beautifier.js
  var require_beautifier3 = __commonJS({
    "node_modules/js-beautify/js/src/html/beautifier.js"(exports, module) {
      "use strict";
      var Options = require_options4().Options;
      var Output = require_output().Output;
      var Tokenizer = require_tokenizer3().Tokenizer;
      var TOKEN = require_tokenizer3().TOKEN;
      var lineBreak = /\r\n|[\r\n]/;
      var allLineBreaks = /\r\n|[\r\n]/g;
      var Printer = function(options, base_indent_string) {
        this.indent_level = 0;
        this.alignment_size = 0;
        this.max_preserve_newlines = options.max_preserve_newlines;
        this.preserve_newlines = options.preserve_newlines;
        this._output = new Output(options, base_indent_string);
      };
      Printer.prototype.current_line_has_match = function(pattern) {
        return this._output.current_line.has_match(pattern);
      };
      Printer.prototype.set_space_before_token = function(value, non_breaking) {
        this._output.space_before_token = value;
        this._output.non_breaking_space = non_breaking;
      };
      Printer.prototype.set_wrap_point = function() {
        this._output.set_indent(this.indent_level, this.alignment_size);
        this._output.set_wrap_point();
      };
      Printer.prototype.add_raw_token = function(token) {
        this._output.add_raw_token(token);
      };
      Printer.prototype.print_preserved_newlines = function(raw_token) {
        var newlines = 0;
        if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
          newlines = raw_token.newlines ? 1 : 0;
        }
        if (this.preserve_newlines) {
          newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
        }
        for (var n = 0; n < newlines; n++) {
          this.print_newline(n > 0);
        }
        return newlines !== 0;
      };
      Printer.prototype.traverse_whitespace = function(raw_token) {
        if (raw_token.whitespace_before || raw_token.newlines) {
          if (!this.print_preserved_newlines(raw_token)) {
            this._output.space_before_token = true;
          }
          return true;
        }
        return false;
      };
      Printer.prototype.previous_token_wrapped = function() {
        return this._output.previous_token_wrapped;
      };
      Printer.prototype.print_newline = function(force) {
        this._output.add_new_line(force);
      };
      Printer.prototype.print_token = function(token) {
        if (token.text) {
          this._output.set_indent(this.indent_level, this.alignment_size);
          this._output.add_token(token.text);
        }
      };
      Printer.prototype.indent = function() {
        this.indent_level++;
      };
      Printer.prototype.deindent = function() {
        if (this.indent_level > 0) {
          this.indent_level--;
          this._output.set_indent(this.indent_level, this.alignment_size);
        }
      };
      Printer.prototype.get_full_indent = function(level) {
        level = this.indent_level + (level || 0);
        if (level < 1) {
          return "";
        }
        return this._output.get_indent_string(level);
      };
      var get_type_attribute = function(start_token) {
        var result = null;
        var raw_token = start_token.next;
        while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
          if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === "type") {
            if (raw_token.next && raw_token.next.type === TOKEN.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
              result = raw_token.next.next.text;
            }
            break;
          }
          raw_token = raw_token.next;
        }
        return result;
      };
      var get_custom_beautifier_name = function(tag_check, raw_token) {
        var typeAttribute = null;
        var result = null;
        if (!raw_token.closed) {
          return null;
        }
        if (tag_check === "script") {
          typeAttribute = "text/javascript";
        } else if (tag_check === "style") {
          typeAttribute = "text/css";
        }
        typeAttribute = get_type_attribute(raw_token) || typeAttribute;
        if (typeAttribute.search("text/css") > -1) {
          result = "css";
        } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
          result = "javascript";
        } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
          result = "html";
        } else if (typeAttribute.search(/test\/null/) > -1) {
          result = "null";
        }
        return result;
      };
      function in_array(what, arr) {
        return arr.indexOf(what) !== -1;
      }
      function TagFrame(parent, parser_token, indent_level) {
        this.parent = parent || null;
        this.tag = parser_token ? parser_token.tag_name : "";
        this.indent_level = indent_level || 0;
        this.parser_token = parser_token || null;
      }
      function TagStack(printer) {
        this._printer = printer;
        this._current_frame = null;
      }
      TagStack.prototype.get_parser_token = function() {
        return this._current_frame ? this._current_frame.parser_token : null;
      };
      TagStack.prototype.record_tag = function(parser_token) {
        var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
        this._current_frame = new_frame;
      };
      TagStack.prototype._try_pop_frame = function(frame) {
        var parser_token = null;
        if (frame) {
          parser_token = frame.parser_token;
          this._printer.indent_level = frame.indent_level;
          this._current_frame = frame.parent;
        }
        return parser_token;
      };
      TagStack.prototype._get_frame = function(tag_list, stop_list) {
        var frame = this._current_frame;
        while (frame) {
          if (tag_list.indexOf(frame.tag) !== -1) {
            break;
          } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
            frame = null;
            break;
          }
          frame = frame.parent;
        }
        return frame;
      };
      TagStack.prototype.try_pop = function(tag, stop_list) {
        var frame = this._get_frame([tag], stop_list);
        return this._try_pop_frame(frame);
      };
      TagStack.prototype.indent_to_tag = function(tag_list) {
        var frame = this._get_frame(tag_list);
        if (frame) {
          this._printer.indent_level = frame.indent_level;
        }
      };
      function Beautifier(source_text, options, js_beautify, css_beautify) {
        this._source_text = source_text || "";
        options = options || {};
        this._js_beautify = js_beautify;
        this._css_beautify = css_beautify;
        this._tag_stack = null;
        var optionHtml = new Options(options, "html");
        this._options = optionHtml;
        this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, "force".length) === "force";
        this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline";
        this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned";
        this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple";
        this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, "preserve".length) === "preserve";
        this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
      }
      Beautifier.prototype.beautify = function() {
        if (this._options.disabled) {
          return this._source_text;
        }
        var source_text = this._source_text;
        var eol = this._options.eol;
        if (this._options.eol === "auto") {
          eol = "\n";
          if (source_text && lineBreak.test(source_text)) {
            eol = source_text.match(lineBreak)[0];
          }
        }
        source_text = source_text.replace(allLineBreaks, "\n");
        var baseIndentString = source_text.match(/^[\t ]*/)[0];
        var last_token = {
          text: "",
          type: ""
        };
        var last_tag_token = new TagOpenParserToken(this._options);
        var printer = new Printer(this._options, baseIndentString);
        var tokens = new Tokenizer(source_text, this._options).tokenize();
        this._tag_stack = new TagStack(printer);
        var parser_token = null;
        var raw_token = tokens.next();
        while (raw_token.type !== TOKEN.EOF) {
          if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
            parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token, tokens);
            last_tag_token = parser_token;
          } else if (raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE || raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete) {
            parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, last_token);
          } else if (raw_token.type === TOKEN.TAG_CLOSE) {
            parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
          } else if (raw_token.type === TOKEN.TEXT) {
            parser_token = this._handle_text(printer, raw_token, last_tag_token);
          } else if (raw_token.type === TOKEN.CONTROL_FLOW_OPEN) {
            parser_token = this._handle_control_flow_open(printer, raw_token);
          } else if (raw_token.type === TOKEN.CONTROL_FLOW_CLOSE) {
            parser_token = this._handle_control_flow_close(printer, raw_token);
          } else {
            printer.add_raw_token(raw_token);
          }
          last_token = parser_token;
          raw_token = tokens.next();
        }
        var sweet_code = printer._output.get_code(eol);
        return sweet_code;
      };
      Beautifier.prototype._handle_control_flow_open = function(printer, raw_token) {
        var parser_token = {
          text: raw_token.text,
          type: raw_token.type
        };
        printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
        if (raw_token.newlines) {
          printer.print_preserved_newlines(raw_token);
        } else {
          printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
        }
        printer.print_token(raw_token);
        printer.indent();
        return parser_token;
      };
      Beautifier.prototype._handle_control_flow_close = function(printer, raw_token) {
        var parser_token = {
          text: raw_token.text,
          type: raw_token.type
        };
        printer.deindent();
        if (raw_token.newlines) {
          printer.print_preserved_newlines(raw_token);
        } else {
          printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
        }
        printer.print_token(raw_token);
        return parser_token;
      };
      Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
        var parser_token = {
          text: raw_token.text,
          type: raw_token.type
        };
        printer.alignment_size = 0;
        last_tag_token.tag_complete = true;
        printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
        if (last_tag_token.is_unformatted) {
          printer.add_raw_token(raw_token);
        } else {
          if (last_tag_token.tag_start_char === "<") {
            printer.set_space_before_token(raw_token.text[0] === "/", true);
            if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
              printer.print_newline(false);
            }
          }
          printer.print_token(raw_token);
        }
        if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
          printer.indent();
          last_tag_token.indent_content = false;
        }
        if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
          printer.set_wrap_point();
        }
        return parser_token;
      };
      Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, last_token) {
        var wrapped = last_tag_token.has_wrapped_attrs;
        var parser_token = {
          text: raw_token.text,
          type: raw_token.type
        };
        printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
        if (last_tag_token.is_unformatted) {
          printer.add_raw_token(raw_token);
        } else if (last_tag_token.tag_start_char === "{" && raw_token.type === TOKEN.TEXT) {
          if (printer.print_preserved_newlines(raw_token)) {
            raw_token.newlines = 0;
            printer.add_raw_token(raw_token);
          } else {
            printer.print_token(raw_token);
          }
        } else {
          if (raw_token.type === TOKEN.ATTRIBUTE) {
            printer.set_space_before_token(true);
          } else if (raw_token.type === TOKEN.EQUALS) {
            printer.set_space_before_token(false);
          } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) {
            printer.set_space_before_token(false);
          }
          if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === "<") {
            if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
              printer.traverse_whitespace(raw_token);
              wrapped = wrapped || raw_token.newlines !== 0;
            }
            if (this._is_wrap_attributes_force && last_tag_token.attr_count >= this._options.wrap_attributes_min_attrs && (last_token.type !== TOKEN.TAG_OPEN || // ie. second attribute and beyond
            this._is_wrap_attributes_force_expand_multiline)) {
              printer.print_newline(false);
              wrapped = true;
            }
          }
          printer.print_token(raw_token);
          wrapped = wrapped || printer.previous_token_wrapped();
          last_tag_token.has_wrapped_attrs = wrapped;
        }
        return parser_token;
      };
      Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
        var parser_token = {
          text: raw_token.text,
          type: "TK_CONTENT"
        };
        if (last_tag_token.custom_beautifier_name) {
          this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
        } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
          printer.add_raw_token(raw_token);
        } else {
          printer.traverse_whitespace(raw_token);
          printer.print_token(raw_token);
        }
        return parser_token;
      };
      Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
        var local = this;
        if (raw_token.text !== "") {
          var text = raw_token.text, _beautifier, script_indent_level = 1, pre = "", post = "";
          if (last_tag_token.custom_beautifier_name === "javascript" && typeof this._js_beautify === "function") {
            _beautifier = this._js_beautify;
          } else if (last_tag_token.custom_beautifier_name === "css" && typeof this._css_beautify === "function") {
            _beautifier = this._css_beautify;
          } else if (last_tag_token.custom_beautifier_name === "html") {
            _beautifier = function(html_source, options) {
              var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
              return beautifier.beautify();
            };
          }
          if (this._options.indent_scripts === "keep") {
            script_indent_level = 0;
          } else if (this._options.indent_scripts === "separate") {
            script_indent_level = -printer.indent_level;
          }
          var indentation = printer.get_full_indent(script_indent_level);
          text = text.replace(/\n[ \t]*$/, "");
          if (last_tag_token.custom_beautifier_name !== "html" && text[0] === "<" && text.match(/^(<!--|<!\[CDATA\[)/)) {
            var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);
            if (!matched) {
              printer.add_raw_token(raw_token);
              return;
            }
            pre = indentation + matched[1] + "\n";
            text = matched[4];
            if (matched[5]) {
              post = indentation + matched[5];
            }
            text = text.replace(/\n[ \t]*$/, "");
            if (matched[2] || matched[3].indexOf("\n") !== -1) {
              matched = matched[3].match(/[ \t]+$/);
              if (matched) {
                raw_token.whitespace_before = matched[0];
              }
            }
          }
          if (text) {
            if (_beautifier) {
              var Child_options = function() {
                this.eol = "\n";
              };
              Child_options.prototype = this._options.raw_options;
              var child_options = new Child_options();
              text = _beautifier(indentation + text, child_options);
            } else {
              var white = raw_token.whitespace_before;
              if (white) {
                text = text.replace(new RegExp("\n(" + white + ")?", "g"), "\n");
              }
              text = indentation + text.replace(/\n/g, "\n" + indentation);
            }
          }
          if (pre) {
            if (!text) {
              text = pre + post;
            } else {
              text = pre + text + "\n" + post;
            }
          }
          printer.print_newline(false);
          if (text) {
            raw_token.text = text;
            raw_token.whitespace_before = "";
            raw_token.newlines = 0;
            printer.add_raw_token(raw_token);
            printer.print_newline(true);
          }
        }
      };
      Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token, tokens) {
        var parser_token = this._get_tag_open_token(raw_token);
        if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && !last_tag_token.is_empty_element && raw_token.type === TOKEN.TAG_OPEN && !parser_token.is_start_tag) {
          printer.add_raw_token(raw_token);
          parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
        } else {
          printer.traverse_whitespace(raw_token);
          this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
          if (!parser_token.is_inline_element) {
            printer.set_wrap_point();
          }
          printer.print_token(raw_token);
        }
        if (parser_token.is_start_tag && this._is_wrap_attributes_force) {
          var peek_index = 0;
          var peek_token;
          do {
            peek_token = tokens.peek(peek_index);
            if (peek_token.type === TOKEN.ATTRIBUTE) {
              parser_token.attr_count += 1;
            }
            peek_index += 1;
          } while (peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);
        }
        if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
          parser_token.alignment_size = raw_token.text.length + 1;
        }
        if (!parser_token.tag_complete && !parser_token.is_unformatted) {
          printer.alignment_size = parser_token.alignment_size;
        }
        return parser_token;
      };
      var TagOpenParserToken = function(options, parent, raw_token) {
        this.parent = parent || null;
        this.text = "";
        this.type = "TK_TAG_OPEN";
        this.tag_name = "";
        this.is_inline_element = false;
        this.is_unformatted = false;
        this.is_content_unformatted = false;
        this.is_empty_element = false;
        this.is_start_tag = false;
        this.is_end_tag = false;
        this.indent_content = false;
        this.multiline_content = false;
        this.custom_beautifier_name = null;
        this.start_tag_token = null;
        this.attr_count = 0;
        this.has_wrapped_attrs = false;
        this.alignment_size = 0;
        this.tag_complete = false;
        this.tag_start_char = "";
        this.tag_check = "";
        if (!raw_token) {
          this.tag_complete = true;
        } else {
          var tag_check_match;
          this.tag_start_char = raw_token.text[0];
          this.text = raw_token.text;
          if (this.tag_start_char === "<") {
            tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
            this.tag_check = tag_check_match ? tag_check_match[1] : "";
          } else {
            tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
            this.tag_check = tag_check_match ? tag_check_match[1] : "";
            if ((raw_token.text.startsWith("{{#>") || raw_token.text.startsWith("{{~#>")) && this.tag_check[0] === ">") {
              if (this.tag_check === ">" && raw_token.next !== null) {
                this.tag_check = raw_token.next.text.split(" ")[0];
              } else {
                this.tag_check = raw_token.text.split(">")[1];
              }
            }
          }
          this.tag_check = this.tag_check.toLowerCase();
          if (raw_token.type === TOKEN.COMMENT) {
            this.tag_complete = true;
          }
          this.is_start_tag = this.tag_check.charAt(0) !== "/";
          this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
          this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === "/>";
          var handlebar_starts = 2;
          if (this.tag_start_char === "{" && this.text.length >= 3) {
            if (this.text.charAt(2) === "~") {
              handlebar_starts = 3;
            }
          }
          this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (!options.indent_handlebars || this.text.length < 3 || /[^#\^]/.test(this.text.charAt(handlebar_starts)));
        }
      };
      Beautifier.prototype._get_tag_open_token = function(raw_token) {
        var parser_token = new TagOpenParserToken(this._options, this._tag_stack.get_parser_token(), raw_token);
        parser_token.alignment_size = this._options.wrap_attributes_indent_size;
        parser_token.is_end_tag = parser_token.is_end_tag || in_array(parser_token.tag_check, this._options.void_elements);
        parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
        parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
        parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
        parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || this._options.inline_custom_elements && parser_token.tag_name.includes("-") || parser_token.tag_start_char === "{";
        return parser_token;
      };
      Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {
        if (!parser_token.is_empty_element) {
          if (parser_token.is_end_tag) {
            parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
          } else {
            if (this._do_optional_end_element(parser_token)) {
              if (!parser_token.is_inline_element) {
                printer.print_newline(false);
              }
            }
            this._tag_stack.record_tag(parser_token);
            if ((parser_token.tag_name === "script" || parser_token.tag_name === "style") && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
              parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
            }
          }
        }
        if (in_array(parser_token.tag_check, this._options.extra_liners)) {
          printer.print_newline(false);
          if (!printer._output.just_added_blankline()) {
            printer.print_newline(true);
          }
        }
        if (parser_token.is_empty_element) {
          if (parser_token.tag_start_char === "{" && parser_token.tag_check === "else") {
            this._tag_stack.indent_to_tag(["if", "unless", "each"]);
            parser_token.indent_content = true;
            var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
            if (!foundIfOnCurrentLine) {
              printer.print_newline(false);
            }
          }
          if (parser_token.tag_name === "!--" && last_token.type === TOKEN.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf("\n") === -1) {
          } else {
            if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
              printer.print_newline(false);
            }
            this._calcluate_parent_multiline(printer, parser_token);
          }
        } else if (parser_token.is_end_tag) {
          var do_end_expand = false;
          do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
          do_end_expand = do_end_expand || !parser_token.is_inline_element && !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) && !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) && last_token.type !== "TK_CONTENT";
          if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
            do_end_expand = false;
          }
          if (do_end_expand) {
            printer.print_newline(false);
          }
        } else {
          parser_token.indent_content = !parser_token.custom_beautifier_name;
          if (parser_token.tag_start_char === "<") {
            if (parser_token.tag_name === "html") {
              parser_token.indent_content = this._options.indent_inner_html;
            } else if (parser_token.tag_name === "head") {
              parser_token.indent_content = this._options.indent_head_inner_html;
            } else if (parser_token.tag_name === "body") {
              parser_token.indent_content = this._options.indent_body_inner_html;
            }
          }
          if (!(parser_token.is_inline_element || parser_token.is_unformatted) && (last_token.type !== "TK_CONTENT" || parser_token.is_content_unformatted)) {
            printer.print_newline(false);
          }
          this._calcluate_parent_multiline(printer, parser_token);
        }
      };
      Beautifier.prototype._calcluate_parent_multiline = function(printer, parser_token) {
        if (parser_token.parent && printer._output.just_added_newline() && !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
          parser_token.parent.multiline_content = true;
        }
      };
      var p_closers = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"];
      var p_parent_excludes = ["a", "audio", "del", "ins", "map", "noscript", "video"];
      Beautifier.prototype._do_optional_end_element = function(parser_token) {
        var result = null;
        if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
          return;
        }
        if (parser_token.tag_name === "body") {
          result = result || this._tag_stack.try_pop("head");
        } else if (parser_token.tag_name === "li") {
          result = result || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
        } else if (parser_token.tag_name === "dd" || parser_token.tag_name === "dt") {
          result = result || this._tag_stack.try_pop("dt", ["dl"]);
          result = result || this._tag_stack.try_pop("dd", ["dl"]);
        } else if (parser_token.parent.tag_name === "p" && p_closers.indexOf(parser_token.tag_name) !== -1) {
          var p_parent = parser_token.parent.parent;
          if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
            result = result || this._tag_stack.try_pop("p");
          }
        } else if (parser_token.tag_name === "rp" || parser_token.tag_name === "rt") {
          result = result || this._tag_stack.try_pop("rt", ["ruby", "rtc"]);
          result = result || this._tag_stack.try_pop("rp", ["ruby", "rtc"]);
        } else if (parser_token.tag_name === "optgroup") {
          result = result || this._tag_stack.try_pop("optgroup", ["select"]);
        } else if (parser_token.tag_name === "option") {
          result = result || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]);
        } else if (parser_token.tag_name === "colgroup") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
        } else if (parser_token.tag_name === "thead") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
          result = result || this._tag_stack.try_pop("colgroup", ["table"]);
        } else if (parser_token.tag_name === "tbody" || parser_token.tag_name === "tfoot") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
          result = result || this._tag_stack.try_pop("colgroup", ["table"]);
          result = result || this._tag_stack.try_pop("thead", ["table"]);
          result = result || this._tag_stack.try_pop("tbody", ["table"]);
        } else if (parser_token.tag_name === "tr") {
          result = result || this._tag_stack.try_pop("caption", ["table"]);
          result = result || this._tag_stack.try_pop("colgroup", ["table"]);
          result = result || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]);
        } else if (parser_token.tag_name === "th" || parser_token.tag_name === "td") {
          result = result || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]);
          result = result || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]);
        }
        parser_token.parent = this._tag_stack.get_parser_token();
        return result;
      };
      module.exports.Beautifier = Beautifier;
    }
  });

  // node_modules/js-beautify/js/src/html/index.js
  var require_html = __commonJS({
    "node_modules/js-beautify/js/src/html/index.js"(exports, module) {
      "use strict";
      var Beautifier = require_beautifier3().Beautifier;
      var Options = require_options4().Options;
      function style_html(html_source, options, js_beautify, css_beautify) {
        var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
        return beautifier.beautify();
      }
      module.exports = style_html;
      module.exports.defaultOptions = function() {
        return new Options();
      };
    }
  });

  // node_modules/js-beautify/js/src/index.js
  var require_src = __commonJS({
    "node_modules/js-beautify/js/src/index.js"(exports, module) {
      "use strict";
      var js_beautify = require_javascript();
      var css_beautify = require_css();
      var html_beautify = require_html();
      function style_html(html_source, options, js, css) {
        js = js || js_beautify;
        css = css || css_beautify;
        return html_beautify(html_source, options, js, css);
      }
      style_html.defaultOptions = html_beautify.defaultOptions;
      module.exports.js = js_beautify;
      module.exports.css = css_beautify;
      module.exports.html = style_html;
    }
  });

  // node_modules/js-beautify/js/index.js
  var require_js = __commonJS({
    "node_modules/js-beautify/js/index.js"(exports, module) {
      "use strict";
      function get_beautify(js_beautify, css_beautify, html_beautify) {
        var beautify2 = function(src, config) {
          return js_beautify.js_beautify(src, config);
        };
        beautify2.js = js_beautify.js_beautify;
        beautify2.css = css_beautify.css_beautify;
        beautify2.html = html_beautify.html_beautify;
        beautify2.js_beautify = js_beautify.js_beautify;
        beautify2.css_beautify = css_beautify.css_beautify;
        beautify2.html_beautify = html_beautify.html_beautify;
        return beautify2;
      }
      if (typeof define === "function" && define.amd) {
        define([
          "./lib/beautify",
          "./lib/beautify-css",
          "./lib/beautify-html"
        ], function(js_beautify, css_beautify, html_beautify) {
          return get_beautify(js_beautify, css_beautify, html_beautify);
        });
      } else {
        (function(mod) {
          var beautifier = require_src();
          beautifier.js_beautify = beautifier.js;
          beautifier.css_beautify = beautifier.css;
          beautifier.html_beautify = beautifier.html;
          mod.exports = get_beautify(beautifier, beautifier, beautifier);
        })(module);
      }
    }
  });

  // src/client.js
  var client_exports = {};
  __export(client_exports, {
    default: () => client_default
  });
  var import_react3 = __toESM(__require("react"), 1);

  // src/toolbox.js
  var import_react2 = __toESM(__require("react"), 1);

  // src/shared.js
  function actionOption(def, pairs) {
    return { key: "action", label: "\u64CD\u4F5C", type: "segment", default: def, options: pairs };
  }
  function bytesToHex(bytes, sep = "") {
    return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join(sep);
  }
  function hexToBytes(hex) {
    const clean = String(hex).replace(/0x/gi, "").replace(/[^0-9a-fA-F]/g, "");
    if (!clean.length || clean.length % 2) throw new Error("Hex \u683C\u5F0F\u4E0D\u5408\u6CD5\uFF08\u957F\u5EA6\u9700\u4E3A\u5076\u6570\uFF09");
    const out = new Uint8Array(clean.length / 2);
    for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    return out;
  }
  function utf8Encode(str) {
    return new TextEncoder().encode(str);
  }
  function utf8Decode(bytes) {
    return new TextDecoder("utf-8").decode(bytes);
  }
  function lines(text) {
    return String(text).replace(/\r\n/g, "\n").split("\n");
  }
  async function shaBytes(algo, data) {
    const buf = typeof data === "string" ? utf8Encode(data) : data;
    return new Uint8Array(await crypto.subtle.digest(algo, buf));
  }
  async function hmacBytes(algo, key, data) {
    const enc = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      enc.encode(key),
      { name: "HMAC", hash: algo },
      false,
      ["sign"]
    );
    return new Uint8Array(await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(data)));
  }
  async function aesCrypt(action, text, key, ivB64) {
    const enc = new TextEncoder();
    const rawKey = utf8Encode(key);
    if (![16, 24, 32].includes(rawKey.length)) {
      throw new Error(`AES \u5BC6\u94A5\u957F\u5EA6\u9700\u4E3A 16/24/32 \u5B57\u8282\uFF08UTF-8\uFF09\uFF0C\u5F53\u524D ${rawKey.length}`);
    }
    const cryptoKey = await crypto.subtle.importKey("raw", rawKey, { name: "AES-CBC" }, false, [action]);
    let data;
    let iv;
    if (action === "encrypt") {
      data = enc.encode(text);
      iv = crypto.getRandomValues(new Uint8Array(16));
    } else {
      data = b64ToBytes(text.trim());
      iv = ivB64 ? b64ToBytes(ivB64) : rawKey.slice(0, 16).padEnd(16, 0);
      if (iv.length !== 16) throw new Error("IV \u9700\u4E3A 16 \u5B57\u8282");
    }
    const out = new Uint8Array(await crypto.subtle[action]({ name: "AES-CBC", iv }, cryptoKey, data));
    if (action === "encrypt") {
      return { result: bytesToB64(out), iv: bytesToB64(iv) };
    }
    return { result: utf8Decode(out), iv: null };
  }
  function bytesToB64(bytes) {
    let bin = "";
    for (const b of bytes) bin += String.fromCharCode(b);
    return btoa(bin);
  }
  function b64ToBytes(b64) {
    const bin = atob(b64.replace(/\s+/g, ""));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  // src/tools/encode.js
  var b64Encode = (text, urlSafe) => {
    let out = bytesToB64(utf8Encode(text));
    if (urlSafe) out = out.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    return out;
  };
  var b64Decode = (text) => {
    let s = text.trim().replace(/-/g, "+").replace(/_/g, "/");
    while (s.length % 4) s += "=";
    try {
      return utf8Decode(b64ToBytes(s));
    } catch {
      throw new Error("Base64 \u89E3\u7801\u5931\u8D25\uFF1A\u5185\u5BB9\u4E0D\u662F\u5408\u6CD5\u7684 Base64");
    }
  };
  var base64Tool = {
    id: "enc-base64",
    group: "encode",
    title: "Base64 \u7F16\u7801/\u89E3\u7801",
    desc: "UTF-8 \u5B89\u5168\u7684 Base64 \u7F16\u7801\u4E0E\u89E3\u7801",
    sample: "\u6DF1\u7814\u541B\uFF0C\u4F60\u597D toolbox\uFF01",
    options: [
      actionOption("encode", [
        { value: "encode", label: "\u7F16\u7801" },
        { value: "decode", label: "\u89E3\u7801" }
      ]),
      { key: "urlsafe", label: "URL \u5B89\u5168", type: "switch", default: false }
    ],
    run(input, o) {
      return o.action === "encode" ? b64Encode(input, o.urlsafe) : b64Decode(input);
    }
  };
  var b64ImageTool = {
    id: "enc-base64-image",
    group: "encode",
    title: "Base64 \u4E0E\u56FE\u7247\u8F6C\u6362",
    desc: "\u56FE\u7247\u6587\u4EF6 \u2194 Base64 Data URL\uFF08\u672C\u5730\u8BFB\u53D6\uFF0C\u4E0D\u4E0A\u4F20\uFF09",
    sample: "",
    custom: "b64-image",
    options: [],
    run() {
      return "";
    }
  };
  var unicodeTool = {
    id: "enc-unicode",
    group: "encode",
    title: "Unicode \u4E0E\u4E2D\u6587\u4E92\u8F6C",
    desc: "\u4E2D\u6587 \u2194 \\uXXXX \u8F6C\u4E49\uFF08\u652F\u6301\u4EE3\u7406\u5BF9\uFF09",
    sample: "\u6DF1\u7814\u541B DeepSeek",
    options: [
      actionOption("encode", [
        { value: "encode", label: "\u4E2D\u6587 \u2192 \\u" },
        { value: "decode", label: "\\u \u2192 \u4E2D\u6587" }
      ]),
      { key: "ascii", label: "\u4FDD\u7559 ASCII", type: "switch", default: true }
    ],
    run(input, o) {
      if (o.action === "encode") {
        let out = "";
        for (const ch of input) {
          const cp = ch.codePointAt(0);
          if (o.ascii && cp < 128) out += ch;
          else out += `\\u${cp.toString(16).padStart(4, "0")}`;
        }
        return out;
      }
      return input.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([0-9a-fA-F]{4})/g, (_, br, plain) => String.fromCodePoint(parseInt(br || plain, 16)));
    }
  };
  var DECODE_TARGETS = ["utf-8", "gbk", "gb18030", "big5", "windows-1252", "shift_jis", "euc-kr", "iso-8859-1"];
  var mojibakeTool = {
    id: "enc-mojibake",
    group: "encode",
    title: "\u4E71\u7801\u53CD\u89E3",
    desc: "\u7528\u591A\u79CD\u7F16\u7801\u9010\u4E00\u5C1D\u8BD5\u89E3\u7801\uFF0C\u627E\u51FA\u6B63\u786E\u539F\u6587\uFF08\u5982 GBK \u88AB\u5F53 Latin-1 \u663E\u793A\uFF09",
    sample: "\xC9\xEE\xD1\xD0\xBE\xFD \xC4\xE3\xBA\xC3",
    options: [],
    run(input) {
      if (!input.trim()) throw new Error("\u8BF7\u8F93\u5165\u4E71\u7801\u6587\u672C");
      const rows = [];
      const bytes = utf8Encode(input.normalize("NFC"));
      const latinBytes = new Uint8Array(input.length);
      let hasNonLatin = false;
      for (let i = 0; i < input.length; i++) {
        const c = input.charCodeAt(i);
        if (c > 255) hasNonLatin = true;
        latinBytes[i] = c & 255;
      }
      for (const enc of DECODE_TARGETS) {
        try {
          const direct = new TextDecoder(enc).decode(latinBytes);
          const round = utf8Encode(direct);
          rows.push({ enc, text: direct, score: scoreText(direct) });
        } catch {
        }
      }
      try {
        const asUtf8 = utf8Decode(latinBytes);
        rows.push({ enc: "latin1\u2192utf-8", text: asUtf8, score: scoreText(asUtf8) });
      } catch {
      }
      rows.sort((a, b) => b.score - a.score);
      return rows.map((r) => `[${r.enc}] (\u53EF\u8BFB\u5EA6 ${r.score})
${r.text}`).join("\n\n");
    }
  };
  function scoreText(s) {
    if (!s) return 0;
    let good = 0;
    for (const ch of s) {
      const cp = ch.codePointAt(0);
      if (cp >= 19968 && cp <= 40959 || cp >= 32 && cp < 127 || cp >= 12288 && cp <= 12351 || cp >= 65280 && cp <= 65519) good++;
    }
    return Math.round(good / [...s].length * 100);
  }
  var radixTool = {
    id: "enc-radix",
    group: "encode",
    title: "\u8FDB\u5236\u8F6C\u6362\uFF08BigInt\uFF09",
    desc: "2~36 \u8FDB\u5236\u4EFB\u610F\u4E92\u8F6C\uFF0C\u652F\u6301\u8D85\u5927\u6574\u6570",
    sample: "12345678901234567890",
    options: [
      { key: "from", label: "\u8F93\u5165\u8FDB\u5236", type: "segment", default: "10", options: [2, 8, 10, 16].map((v) => ({ value: String(v), label: String(v) })) },
      { key: "to", label: "\u8F93\u51FA\u8FDB\u5236", type: "segment", default: "16", options: [2, 8, 10, 16].map((v) => ({ value: String(v), label: String(v) })) },
      { key: "mode", label: "\u6A21\u5F0F", type: "segment", default: "uint", options: [
        { value: "uint", label: "\u65E0\u7B26\u53F7" },
        { value: "int", label: "\u6709\u7B26\u53F7\u8865\u7801" },
        { value: "bytes", label: "\u5355\u5B57\u8282" }
      ] },
      { key: "bits", label: "\u4F4D\u5BBD", type: "segment", default: "64", options: ["8", "16", "32", "64"].map((v) => ({ value: v, label: v })) }
    ],
    run(input, o) {
      const from = Number(o.from);
      const to = Number(o.to);
      if (o.mode === "bytes") {
        const n = Number(input.trim());
        if (!Number.isInteger(n) || n < 0 || n > 255) throw new Error("\u5355\u5B57\u8282\u6A21\u5F0F\u9700\u8F93\u5165 0~255 \u6574\u6570");
        return [2, 8, 10, 16].map((r) => `base${r}: ${n.toString(r)}`).join("\n");
      }
      const clean = input.trim().replace(/^0[xbo]/i, "");
      let value;
      try {
        value = BigInt(from === 10 ? clean.replace(/[^0-9-]/g, "") || "0" : strToBigInt(clean, from));
      } catch {
        throw new Error(`\u300C${clean}\u300D\u4E0D\u662F\u5408\u6CD5\u7684 ${from} \u8FDB\u5236\u6570`);
      }
      let out = value;
      if (o.mode === "int") {
        const bits = Number(o.bits);
        const mod = 1n << BigInt(bits);
        out = (value % mod + mod) % mod;
        if (value < 0n || out >= mod / 2n) {
          const signed = out >= mod / 2n ? out - mod : out;
          return `hex : 0x${out.toString(16)}
dec : ${signed}
bin : ${padBin(out.toString(2), bits)}`;
        }
      }
      return `hex : 0x${(out < 0n ? -out : out).toString(16)}${out < 0n ? " (-)" : ""}
dec : ${out}
bin : ${out < 0n ? "-" : ""}${padBin((out < 0n ? -out : out).toString(2), 64)}`;
      function padBin(s, width) {
        return s.length > width ? s : s.padStart(width, "0").replace(/(.{4})(?=.)/g, "$1 ");
      }
      function strToBigInt(s, radix) {
        const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
        let neg = false;
        s = s.toLowerCase().replace(/^[+-]/, (m) => (neg = m === "-", ""));
        let acc = 0n;
        const R = BigInt(radix);
        for (const ch of s) {
          const d = digits.indexOf(ch);
          if (d < 0 || d >= radix) throw new Error("bad digit");
          acc = acc * R + BigInt(d);
        }
        return neg ? -acc : acc;
      }
    }
  };
  var endianTool = {
    id: "enc-endian",
    group: "encode",
    title: "\u5927\u5C0F\u7AEF\u8F6C\u6362",
    desc: "\u6570\u503C \u2194 \u6307\u5B9A\u5B57\u8282\u5E8F\u7684\u5341\u516D\u8FDB\u5236\u5B57\u8282",
    sample: "0x12345678",
    options: [
      { key: "type", label: "\u7C7B\u578B", type: "segment", default: "u32", options: [
        { value: "u16", label: "UInt16" },
        { value: "u32", label: "UInt32" },
        { value: "f32", label: "Float32" },
        { value: "f64", label: "Float64" }
      ] },
      { key: "endian", label: "\u5B57\u8282\u5E8F", type: "segment", default: "little", options: [
        { value: "little", label: "Little" },
        { value: "big", label: "Big" }
      ] }
    ],
    run(input, o) {
      const sizes = { u16: 2, u32: 4, f32: 4, f64: 8 };
      const size = sizes[o.type];
      let hex = input.trim().replace(/^0x/i, "").replace(/\s+/g, "");
      if (!/^[0-9a-fA-F]+$/.test(hex) || hex.length === 0 || hex.length > size * 2) {
        throw new Error(`\u8BF7\u8F93\u5165\u6700\u591A ${size * 2} \u4F4D\u5341\u516D\u8FDB\u5236`);
      }
      hex = hex.padStart(size * 2, "0");
      const bytes = hexToBytes(hex);
      const buf = new ArrayBuffer(size);
      const view = new DataView(buf);
      for (let i = 0; i < size; i++) view.setUint8(i, bytes[i]);
      const read = o.type === "f32" ? view.getFloat32(0, o.endian === "little") : o.type === "f64" ? view.getFloat64(0, o.endian === "little") : o.type === "u16" ? view.getUint16(0, o.endian === "little") : view.getUint32(0, o.endian === "little");
      const other = o.endian === "little" ? "big" : "little";
      const readOther = o.type === "f32" ? view.getFloat32(0, other === "little") : o.type === "f64" ? view.getFloat64(0, other === "little") : o.type === "u16" ? view.getUint16(0, other === "little") : view.getUint32(0, other === "little");
      const fmt = (v) => o.type.startsWith("u") ? `0x${BigInt(v).toString(16).toUpperCase()}` : String(v);
      return `\u8F93\u5165\u5B57\u8282  : ${bytesToHex(bytes, " ")}
${o.endian} \u2192 \u6570\u503C: ${fmt(read)}
${other} \u2192 \u6570\u503C: ${fmt(readOther)}
\u5B57\u8282\u6570    : ${size}`;
    }
  };
  var hexTool = {
    id: "enc-hex",
    group: "encode",
    title: "\u6587\u672C\u4E0E Hex \u8F6C\u6362",
    desc: "UTF-8 \u5B57\u8282\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C",
    sample: "\u6DF1\u7814\u541B",
    options: [
      actionOption("encode", [
        { value: "encode", label: "\u6587\u672C \u2192 Hex" },
        { value: "decode", label: "Hex \u2192 \u6587\u672C" }
      ]),
      { key: "sep", label: "\u5206\u9694", type: "segment", default: "space", options: [
        { value: "space", label: "\u7A7A\u683C" },
        { value: "none", label: "\u65E0" },
        { value: "comma", label: "\u9017\u53F7" }
      ] }
    ],
    run(input, o) {
      if (o.action === "encode") {
        return bytesToHex(utf8Encode(input), o.sep === "space" ? " " : o.sep === "comma" ? "," : "");
      }
      const bytes = hexToBytes(input);
      return utf8Decode(bytes);
    }
  };
  function b64urlDecode(part) {
    let s = part.replace(/-/g, "+").replace(/_/g, "/");
    while (s.length % 4) s += "=";
    return utf8Decode(b64ToBytes(s));
  }
  var jwtTool = {
    id: "enc-jwt",
    group: "encode",
    title: "JWT \u89E3\u6790",
    desc: "\u89E3\u6790 JWT header/payload\uFF0C\u6821\u9A8C\u8FC7\u671F\u65F6\u95F4\u4E0E HMAC \u7B7E\u540D",
    sample: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IuacrOaWh-acnyIsImlhdCI6MTcwMDAwMDAwMH0.dummy_signature",
    options: [
      { key: "secret", label: "HMAC \u5BC6\u94A5\uFF08\u53EF\u9009\uFF09", type: "text", default: "", placeholder: "\u586B\u5199\u540E\u9A8C\u7B7E" }
    ],
    run(input, o) {
      const parts = input.trim().split(".");
      if (parts.length < 2) throw new Error("JWT \u9700\u5305\u542B header.payload\uFF08.signature \u53EF\u9009\uFF09");
      let header;
      let payload;
      try {
        header = JSON.parse(b64urlDecode(parts[0]));
        payload = JSON.parse(b64urlDecode(parts[1]));
      } catch (e) {
        throw new Error(`JWT \u89E3\u7801\u5931\u8D25\uFF1A${e.message}`);
      }
      const rows = [];
      rows.push(`\u2500\u2500 header \u2500\u2500
${JSON.stringify(header, null, 2)}`);
      rows.push(`\u2500\u2500 payload \u2500\u2500
${JSON.stringify(payload, null, 2)}`);
      const now = Math.floor(Date.now() / 1e3);
      const timeRows = [];
      for (const k of ["iat", "exp", "nbf"]) {
        if (payload[k]) {
          const d = new Date(payload[k] * 1e3);
          const rel = k === "exp" ? payload[k] > now ? `\uFF08${Math.round((payload[k] - now) / 60)} \u5206\u949F\u540E\u8FC7\u671F\uFF09` : "\uFF08\u5DF2\u8FC7\u671F\uFF09" : `\uFF08${Math.round((now - payload[k]) / 86400)} \u5929\u524D\uFF09`;
          timeRows.push(`${k}: ${d.toLocaleString()} ${rel}`);
        }
      }
      if (timeRows.length) rows.push(`\u2500\u2500 \u65F6\u95F4 \u2500\u2500
${timeRows.join("\n")}`);
      if (parts[2] && o.secret) {
        return (async () => {
          const enc = new TextEncoder();
          const key = await crypto.subtle.importKey("raw", enc.encode(o.secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
          const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode(`${parts[0]}.${parts[1]}`)));
          const expect = bytesToB64(sig).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
          rows.push(`\u2500\u2500 \u7B7E\u540D\u9A8C\u8BC1 (HS256) \u2500\u2500
${expect === parts[2] ? "\u2705 \u7B7E\u540D\u5339\u914D" : `\u274C \u7B7E\u540D\u4E0D\u5339\u914D
\u671F\u671B: ${expect}
\u5B9E\u9645: ${parts[2]}`}`);
          return rows.join("\n\n");
        })();
      }
      return rows.join("\n\n");
    }
  };
  var gzipTool = {
    id: "enc-gzip",
    group: "encode",
    title: "Gzip / Deflate \u538B\u7F29",
    desc: "\u6587\u672C\u538B\u7F29\u4E3A Base64\uFF0C\u6216\u4ECE Base64 \u89E3\u538B\uFF08CompressionStream\uFF09",
    sample: "compress me compress me compress me compress me",
    options: [
      actionOption("compress", [
        { value: "compress", label: "\u538B\u7F29" },
        { value: "decompress", label: "\u89E3\u538B" }
      ]),
      { key: "format", label: "\u683C\u5F0F", type: "segment", default: "gzip", options: [
        { value: "gzip", label: "gzip" },
        { value: "deflate", label: "zlib" },
        { value: "deflate-raw", label: "raw" }
      ] }
    ],
    async run(input, o) {
      if (!input.trim()) throw new Error("\u8BF7\u8F93\u5165\u5185\u5BB9");
      if (o.action === "compress") {
        const cs = new CompressionStream(o.format);
        const stream2 = new Blob([utf8Encode(input)]).stream().pipeThrough(cs);
        const buf = new Uint8Array(await new Response(stream2).arrayBuffer());
        return bytesToB64(buf);
      }
      const bytes = (() => {
        try {
          return b64ToBytes(input);
        } catch {
          throw new Error("\u8BF7\u8F93\u5165 Base64 \u7F16\u7801\u7684\u538B\u7F29\u6570\u636E");
        }
      })();
      const ds = new DecompressionStream(o.format);
      const stream = new Blob([bytes]).stream().pipeThrough(ds);
      const text = await new Response(stream).text();
      return text;
    }
  };
  var punycodeTool = {
    id: "enc-punycode",
    group: "encode",
    title: "Punycode / IDN \u8F6C\u6362",
    desc: "\u4E2D\u6587\u57DF\u540D \u2194 xn-- Punycode",
    sample: "\u6DF1\u7814. example.com",
    options: [
      actionOption("encode", [
        { value: "encode", label: "\u57DF\u540D \u2192 Punycode" },
        { value: "decode", label: "Punycode \u2192 \u57DF\u540D" }
      ])
    ],
    run(input, o) {
      const parts = input.trim().split(/\s+/).flatMap((p) => p.split("."));
      if (o.action === "encode") {
        const host2 = input.trim().replace(/\s+/g, "");
        const u2 = new URL(`http://${host2}`);
        return u2.hostname;
      }
      const host = input.trim().replace(/\s+/g, "");
      const u = new URL(`http://${host}`);
      return u.hostname.split(".").map((label) => {
        if (!label.startsWith("xn--")) return label;
        try {
          return punyDecode(label.slice(4));
        } catch {
          return label;
        }
      }).join(".");
      function punyDecode(input2) {
        const BASE = 36;
        const TMIN = 1;
        const TMAX = 26;
        const SKEW = 38;
        const DAMP = 700;
        const INITIAL_BIAS = 72;
        const INITIAL_N = 128n;
        const handled = input2.lastIndexOf("-");
        let output = handled > 0 ? [...input2.slice(0, handled)].map((c) => c.codePointAt(0)) : [];
        let i = 0n;
        let bias = INITIAL_BIAS;
        let n = INITIAL_N;
        let idx = handled + 1;
        const digitToVal = (cp) => {
          if (cp >= 65 && cp <= 90) return cp - 65;
          if (cp >= 97 && cp <= 122) return cp - 97;
          if (cp >= 48 && cp <= 57) return cp - 48 + 26;
          return -1;
        };
        const adapt = (delta, num) => {
          delta = num === 1 ? Math.floor(delta / DAMP) : delta >> 1;
          delta += Math.floor(delta / num);
          let k = 0;
          while (delta > (36 - TMIN) * TMAX / 2) {
            delta = Math.floor(delta / (36 - TMIN));
            k += TMIN;
          }
          return k + Math.floor((36 - TMIN + 1) * delta / (delta + SKEW));
        };
        while (idx < input2.length) {
          const oldi = i;
          let w = 1;
          for (let k = BASE; ; k += BASE) {
            if (idx >= input2.length) throw new Error("bad");
            const d = digitToVal(input2.charCodeAt(idx++));
            if (d < 0) throw new Error("bad");
            i += BigInt(d) * BigInt(w);
            const t = k <= bias ? TMIN : k >= bias + TMAX ? TMAX : k - bias;
            if (d < t) break;
            w *= BASE - t;
          }
          bias = adapt(Number(i - oldi), output.length + 1);
          n += i / BigInt(output.length + 1);
          i %= BigInt(output.length + 1);
          output.splice(Number(i), 0, Number(n));
          i += 1n;
        }
        return String.fromCodePoint(...output);
      }
    }
  };
  var qpTool = {
    id: "enc-qp",
    group: "encode",
    title: "Quoted-Printable \u7F16\u7801/\u89E3\u7801",
    desc: "\u90AE\u4EF6\u6B63\u6587\u7528\u7684 =XX \u8F6C\u4E49\u7F16\u7801",
    sample: "\u6DF1\u7814\u541B hello",
    options: [
      actionOption("encode", [
        { value: "encode", label: "\u7F16\u7801" },
        { value: "decode", label: "\u89E3\u7801" }
      ])
    ],
    run(input, o) {
      if (o.action === "encode") {
        const bytes2 = utf8Encode(input);
        let out = "";
        let lineLen = 0;
        for (const b of bytes2) {
          let tok;
          if (b === 10) {
            out += "\n";
            lineLen = 0;
            continue;
          }
          if (b >= 33 && b <= 126 && b !== 61 || b === 32 || b === 9) tok = String.fromCharCode(b);
          else tok = `=${b.toString(16).toUpperCase().padStart(2, "0")}`;
          if (lineLen + tok.length > 75) {
            out += "=\n";
            lineLen = 0;
          }
          out += tok;
          lineLen += tok.length;
        }
        return out;
      }
      const bytes = [];
      const src = input.replace(/=\n/g, "").replace(/=\r\n/g, "");
      for (let i = 0; i < src.length; i++) {
        const c = src[i];
        if (c === "=" && i + 2 < src.length && /^[0-9a-fA-F]{2}$/.test(src.slice(i + 1, i + 3))) {
          bytes.push(parseInt(src.slice(i + 1, i + 3), 16));
          i += 2;
        } else {
          bytes.push(c.charCodeAt(0));
        }
      }
      return utf8Decode(new Uint8Array(bytes));
    }
  };
  var B58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var B62_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var B32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  var multiBaseTool = {
    id: "enc-multibase",
    group: "encode",
    title: "Base16/32/58/62 \u7F16\u7801",
    desc: "\u591A\u79CD Base-N \u7F16\u7801\uFF08Base85 \u89C1\u4E0B\u65B9\u72EC\u7ACB\u5DE5\u5177\uFF09",
    sample: "toolbox",
    options: [
      { key: "base", label: "\u7F16\u7801", type: "segment", default: "58", options: [
        { value: "16", label: "Base16" },
        { value: "32", label: "Base32" },
        { value: "58", label: "Base58" },
        { value: "62", label: "Base62" }
      ] },
      actionOption("encode", [
        { value: "encode", label: "\u7F16\u7801" },
        { value: "decode", label: "\u89E3\u7801" }
      ])
    ],
    run(input, o) {
      const N = o.base;
      if (N === "16") {
        return o.action === "encode" ? bytesToHex(utf8Encode(input)) : utf8Decode(hexToBytes(input));
      }
      if (N === "32") {
        if (o.action === "encode") {
          const bytes2 = utf8Encode(input);
          let bits2 = 0;
          let value2 = 0;
          let out = "";
          for (const b of bytes2) {
            value2 = value2 << 8 | b;
            bits2 += 8;
            while (bits2 >= 5) {
              out += B32_ALPHABET[value2 >>> bits2 - 5 & 31];
              bits2 -= 5;
            }
          }
          if (bits2 > 0) out += B32_ALPHABET[value2 << 5 - bits2 & 31];
          return out;
        }
        const clean = input.toUpperCase().replace(/[^A-Z2-7]/g, "").replace(/=+$/, "");
        let bits = 0;
        let value = 0;
        const bytes = [];
        for (const ch of clean) {
          const v = B32_ALPHABET.indexOf(ch);
          if (v < 0) continue;
          value = value << 5 | v;
          bits += 5;
          if (bits >= 8) {
            bytes.push(value >>> bits - 8 & 255);
            bits -= 8;
          }
        }
        return utf8Decode(new Uint8Array(bytes));
      }
      const ALPHABET = N === "58" ? B58_ALPHABET : B62_ALPHABET;
      if (o.action === "encode") {
        const bytes = utf8Encode(input);
        if (N === "58") {
          let zeros = 0;
          while (zeros < bytes.length && bytes[zeros] === 0) zeros++;
          let num3 = 0n;
          for (const b of bytes) num3 = num3 << 8n | BigInt(b);
          let out2 = "";
          while (num3 > 0n) {
            out2 = ALPHABET[Number(num3 % 58n)] + out2;
            num3 /= 58n;
          }
          return "1".repeat(zeros) + (out2 || "");
        }
        let num2 = 0n;
        for (const b of bytes) num2 = num2 << 8n | BigInt(b);
        let out = "";
        const R2 = 62n;
        while (num2 > 0n) {
          out = ALPHABET[Number(num2 % R2)] + out;
          num2 /= R2;
        }
        return out || ALPHABET[0];
      }
      const digits = [...input].map((ch) => {
        const d = ALPHABET.indexOf(ch);
        if (d < 0) throw new Error(`\u5B57\u7B26\u300C${ch}\u300D\u4E0D\u5728 Base${N} \u5B57\u6BCD\u8868\u4E2D`);
        return d;
      });
      let num = 0n;
      const R = BigInt(N);
      for (const d of digits) num = num * R + BigInt(d);
      const hex = num.toString(16).padStart(num.toString(16).length % 2 ? 1 : 0, "0");
      let byteLen = Math.ceil(num.toString(16).length / 2);
      if (N === "58") {
        let zeros = 0;
        while (zeros < input.length && input[zeros] === "1") zeros++;
        const body = bytesOf(num);
        return utf8Decode(new Uint8Array([...new Array(zeros).fill(0), ...body]));
      }
      return utf8Decode(new Uint8Array(bytesOf(num)));
      function bytesOf(n) {
        const hexs = n.toString(16);
        const even = hexs.length % 2 ? `0${hexs}` : hexs;
        const out = [];
        for (let i = 0; i < even.length; i += 2) out.push(parseInt(even.slice(i, i + 2), 16));
        return out;
      }
    }
  };
  var B85_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~";
  var base85Tool = {
    id: "enc-base85",
    group: "encode",
    title: "Base85 / ASCII85 \u7F16\u7801",
    desc: "Z85 \u53D8\u4F53 Base85 \u7F16\u7801\u4E0E\u89E3\u7801",
    sample: "toolbox",
    options: [
      actionOption("encode", [
        { value: "encode", label: "\u7F16\u7801" },
        { value: "decode", label: "\u89E3\u7801" }
      ])
    ],
    run(input, o) {
      if (o.action === "encode") {
        const bytes2 = utf8Encode(input);
        const padN = (4 - bytes2.length % 4) % 4;
        const padded = new Uint8Array(bytes2.length + padN);
        padded.set(bytes2);
        let out = "";
        for (let i = 0; i < padded.length; i += 4) {
          let num = 0n;
          for (let j = 0; j < 4; j++) num = num << 8n | BigInt(padded[i + j]);
          const cs = [];
          for (let j = 4; j >= 0; j--) {
            cs[j] = B85_ALPHABET[Number(num % 85n)];
            num /= 85n;
          }
          out += cs.join("");
        }
        return out;
      }
      const clean = input.replace(/\s+/g, "");
      if (!clean.length || clean.length % 5) throw new Error("Base85 \u7F16\u7801\u957F\u5EA6\u9700\u4E3A 5 \u7684\u500D\u6570");
      const bytes = [];
      for (let i = 0; i < clean.length; i += 5) {
        let num = 0n;
        for (const ch of clean.slice(i, i + 5)) {
          const d = B85_ALPHABET.indexOf(ch);
          if (d < 0) throw new Error(`\u5B57\u7B26\u300C${ch}\u300D\u4E0D\u5728 Base85 \u5B57\u6BCD\u8868\u4E2D`);
          num = num * 85n + BigInt(d);
        }
        if (num > 0xffffffffn) throw new Error("Base85 \u6570\u636E\u8D8A\u754C");
        const group = [0, 0, 0, 0];
        for (let j = 3; j >= 0; j--) {
          group[j] = Number(num & 0xffn);
          num >>= 8n;
        }
        bytes.push(...group);
      }
      while (bytes.length && bytes[bytes.length - 1] === 0) bytes.pop();
      return utf8Decode(new Uint8Array(bytes));
    }
  };
  var byteArrayTool = {
    id: "enc-byte-array",
    group: "encode",
    title: "\u5B57\u8282\u6570\u7EC4\u6709/\u65E0\u7B26\u53F7\u4E92\u8F6C",
    desc: "\u6709\u7B26\u53F7 (-128~127) \u2194 \u65E0\u7B26\u53F7 (0~255) \u5B57\u8282\u5E8F\u5217\u8F6C\u6362",
    sample: "-1, 0, 127, -128",
    options: [
      actionOption("toU", [
        { value: "toU", label: "\u6709\u7B26\u53F7 \u2192 \u65E0\u7B26\u53F7" },
        { value: "toS", label: "\u65E0\u7B26\u53F7 \u2192 \u6709\u7B26\u53F7" }
      ])
    ],
    run(input, o) {
      const nums = input.split(/[\s,;]+/).filter(Boolean).map(Number);
      if (nums.some((n) => !Number.isInteger(n))) throw new Error("\u53EA\u63A5\u53D7\u6574\u6570\uFF0C\u9017\u53F7\u6216\u7A7A\u767D\u5206\u9694");
      const bad = nums.find((n) => n < (o.action === "toU" ? -128 : 0) || n > (o.action === "toU" ? 127 : 255));
      if (bad !== void 0) throw new Error(`\u6570\u503C\u8D8A\u754C\uFF1A${bad}`);
      const out = nums.map((n) => o.action === "toU" ? n < 0 ? n + 256 : n : n > 127 ? n - 256 : n);
      return out.join(", ");
    }
  };
  var ENCODE_TOOLS = [
    base64Tool,
    b64ImageTool,
    unicodeTool,
    mojibakeTool,
    radixTool,
    endianTool,
    hexTool,
    jwtTool,
    gzipTool,
    punycodeTool,
    qpTool,
    multiBaseTool,
    base85Tool,
    byteArrayTool
  ];

  // src/tools/hash.js
  init_md5();
  function crcCompute(name, bytes) {
    const specs = {
      "CRC-8": { poly: 7, init: 0, refin: false, refout: false, xorout: 0, width: 8 },
      "CRC-16/Modbus": { poly: 32773, init: 65535, refin: true, refout: true, xorout: 0, width: 16 },
      "CRC-16/CCITT": { poly: 4129, init: 65535, refin: false, refout: false, xorout: 0, width: 16 },
      "CRC-16/XMODEM": { poly: 4129, init: 0, refin: false, refout: false, xorout: 0, width: 16 },
      "CRC-32": { poly: 79764919, init: 4294967295, refin: true, refout: true, xorout: 4294967295, width: 32 }
    };
    const s = specs[name];
    if (s.width === 32) {
      let crc2 = 4294967295;
      for (const b of bytes) {
        crc2 ^= b;
        for (let k = 0; k < 8; k++) crc2 = crc2 & 1 ? crc2 >>> 1 ^ 3988292384 : crc2 >>> 1;
      }
      return ((crc2 ^ 4294967295) >>> 0).toString(16).padStart(8, "0");
    }
    if (s.width === 16) {
      let crc2 = s.init;
      const poly = s.refin ? 40961 : s.poly;
      for (const b of bytes) {
        crc2 ^= s.refin ? b : b << 8;
        for (let k = 0; k < 8; k++) {
          if (s.refin) crc2 = crc2 & 1 ? crc2 >>> 1 ^ poly : crc2 >>> 1;
          else crc2 = crc2 & 32768 ? (crc2 << 1 ^ poly) & 65535 : crc2 << 1 & 65535;
        }
      }
      if (s.refout) crc2 = (crc2 & 255) << 8 | crc2 >> 8;
      return (crc2 ^ s.xorout).toString(16).padStart(4, "0").toUpperCase();
    }
    let crc = s.init;
    for (const b of bytes) {
      crc ^= b;
      for (let k = 0; k < 8; k++) crc = crc & 128 ? (crc << 1 ^ s.poly) & 255 : crc << 1 & 255;
    }
    return (crc ^ s.xorout).toString(16).padStart(2, "0").toUpperCase();
  }
  var digestTool = {
    id: "hash-digest",
    group: "hash",
    title: "MD5 / SHA / CRC / BCC \u6458\u8981",
    desc: "\u6587\u672C\u6458\u8981\u4E00\u952E\u5168\u7B97\uFF08SHA \u8D70 WebCrypto\uFF0CMD5/CRC \u7EAF JS\uFF09",
    sample: "\u6DF1\u7814\u541B hello toolbox",
    options: [],
    async run(input) {
      if (!input) throw new Error("\u8BF7\u8F93\u5165\u5185\u5BB9");
      const bytes = utf8Encode(input);
      const rows = [];
      rows.push(`MD5      : ${bytesToHex(md5Bytes(bytes))}`);
      for (const algo of ["SHA-1", "SHA-256", "SHA-384", "SHA-512"]) {
        rows.push(`${algo.padEnd(8)}: ${bytesToHex(await shaBytes(algo, bytes))}`);
      }
      rows.push("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500");
      for (const name of ["CRC-8", "CRC-16/Modbus", "CRC-16/CCITT", "CRC-16/XMODEM", "CRC-32"]) {
        rows.push(`${name.padEnd(14)}: ${crcCompute(name, bytes)}`);
      }
      let lrc = 0;
      for (const b of bytes) lrc ^= b;
      rows.push(`BCC / LRC : ${lrc.toString(16).padStart(2, "0").toUpperCase()}`);
      return rows.join("\n");
    }
  };
  var fileHashTool = {
    id: "hash-file",
    group: "hash",
    title: "\u6587\u4EF6 Hash \u8BA1\u7B97",
    desc: "\u672C\u5730\u8BA1\u7B97\u6587\u4EF6 MD5 / SHA \u7CFB\u5217\u6458\u8981\uFF08\u4E0D\u4E0A\u4F20\uFF09",
    sample: "",
    custom: "file-hash",
    options: [],
    run() {
      return "";
    }
  };
  var hmacTool = {
    id: "hash-hmac",
    group: "hash",
    title: "HMAC \u8BA1\u7B97",
    desc: "HMAC-MD5 / HMAC-SHA \u7CFB\u5217",
    sample: "message",
    options: [
      { key: "key", label: "\u5BC6\u94A5", type: "text", default: "secret", placeholder: "HMAC key" }
    ],
    async run(input, o) {
      if (!o.key) throw new Error("\u8BF7\u586B\u5199\u5BC6\u94A5");
      const rows = [`HMAC-MD5 : ${bytesToHex(md5Bytes(hmacMd5Raw(o.key, input)))}`];
      for (const algo of ["SHA-1", "SHA-256", "SHA-384", "SHA-512"]) {
        rows.push(`HMAC-${algo.padEnd(7)}: ${bytesToHex(await hmacBytes(algo, o.key, input))}`);
      }
      return rows.join("\n");
    }
  };
  function hmacMd5Raw(key, message) {
    let kb = utf8Encode(key);
    if (kb.length > 64) kb = md5Bytes(kb);
    const ipad = new Uint8Array(64 + utf8Encode(message).length);
    const opad = new Uint8Array(64 + 16);
    for (let i = 0; i < 64; i++) {
      const b = i < kb.length ? kb[i] : 0;
      ipad[i] = b ^ 54;
      opad[i] = b ^ 92;
    }
    ipad.set(utf8Encode(message), 64);
    opad.set(md5Bytes(ipad), 64);
    return opad;
  }
  var aesTool = {
    id: "crypto-aes",
    group: "crypto",
    title: "AES \u52A0\u5BC6/\u89E3\u5BC6",
    desc: "AES-CBC (PKCS#7)\uFF0CBase64 \u8F93\u5165\u8F93\u51FA\uFF0C\u5BC6\u94A5 16/24/32 \u5B57\u8282",
    sample: "\u6DF1\u7814\u541B secret message",
    options: [
      actionOption("encrypt", [
        { value: "encrypt", label: "\u52A0\u5BC6" },
        { value: "decrypt", label: "\u89E3\u5BC6" }
      ]),
      { key: "key", label: "\u5BC6\u94A5", type: "text", default: "0123456789abcdef", placeholder: "16/24/32 \u5B57\u8282" },
      { key: "iv", label: "\u89E3\u5BC6 IV\uFF08Base64\uFF09", type: "text", default: "", placeholder: "\u52A0\u5BC6\u65F6\u81EA\u52A8\u751F\u6210" }
    ],
    async run(input, o) {
      const { result, iv } = await aesCrypt(o.action, input, o.key, o.iv);
      return o.action === "encrypt" ? `${result}

IV (Base64\uFF0C\u89E3\u5BC6\u65F6\u9700\u8981): ${iv}` : result;
    }
  };
  var xorTool = {
    id: "crypto-xor",
    group: "crypto",
    title: "XOR \u5F02\u6216\u52A0\u5BC6",
    desc: "\u5FAA\u73AF\u5BC6\u94A5\u5F02\u6216\uFF0C\u8F93\u5165\u8F93\u51FA\u5747\u4E3A Hex",
    sample: "hello",
    options: [
      { key: "key", label: "\u5BC6\u94A5", type: "text", default: "key", placeholder: "\u4EFB\u610F\u5B57\u7B26\u4E32" }
    ],
    run(input, o) {
      if (!o.key) throw new Error("\u8BF7\u586B\u5199\u5BC6\u94A5");
      const key = utf8Encode(o.key);
      const isHexIn = /^[0-9a-fA-F\s]+$/.test(input.trim()) && input.trim().length % 2 === 0 && input.trim().length > 0;
      const data = isHexIn ? hexToBytes(input) : utf8Encode(input);
      const out = new Uint8Array(data.length);
      for (let i = 0; i < data.length; i++) out[i] = data[i] ^ key[i % key.length];
      if (isHexIn) {
        const text = utf8Decode(out);
        if (utf8Encode(text).every((b, i) => b === out[i])) return text;
        return `hex: ${bytesToHex(out)}
(\u7ED3\u679C\u975E UTF-8 \u6587\u672C\uFF0C\u8F93\u51FA\u4E3A Hex)`;
      }
      return `hex: ${bytesToHex(out)}
try-b64: ${bytesToB64(out)}`;
    }
  };
  var rc4Tool = {
    id: "crypto-rc4",
    group: "crypto",
    title: "RC4 \u52A0\u5BC6/\u89E3\u5BC6",
    desc: "RC4 \u6D41\u5BC6\u7801\uFF0CHex \u8F93\u5165\u8F93\u51FA\uFF08\u5BF9\u79F0\uFF0C\u52A0\u5BC6=\u89E3\u5BC6\uFF09",
    sample: "hello rc4",
    options: [
      { key: "key", label: "\u5BC6\u94A5", type: "text", default: "secret", placeholder: "RC4 key" }
    ],
    run(input, o) {
      if (!o.key) throw new Error("\u8BF7\u586B\u5199\u5BC6\u94A5");
      const key = utf8Encode(o.key);
      const S2 = new Uint8Array(256);
      for (let i2 = 0; i2 < 256; i2++) S2[i2] = i2;
      let j = 0;
      for (let i2 = 0; i2 < 256; i2++) {
        j = j + S2[i2] + key[i2 % key.length] & 255;
        [S2[i2], S2[j]] = [S2[j], S2[i2]];
      }
      const isInHex = /^[0-9a-fA-F\s]+$/.test(input.trim()) && input.trim().replace(/\s+/g, "").length % 2 === 0;
      const data = isInHex ? hexToBytes(input) : utf8Encode(input);
      const out = new Uint8Array(data.length);
      let i = 0;
      let jj = 0;
      for (let k = 0; k < data.length; k++) {
        i = i + 1 & 255;
        jj = jj + S2[i] & 255;
        [S2[i], S2[jj]] = [S2[jj], S2[i]];
        out[k] = data[k] ^ S2[S2[i] + S2[jj] & 255];
      }
      if (isInHex) {
        const text = utf8Decode(out);
        if (utf8Encode(text).every((b, i2) => b === out[i2])) return text;
        return `hex: ${bytesToHex(out)}
(\u7ED3\u679C\u975E UTF-8 \u6587\u672C\uFF0C\u8F93\u51FA\u4E3A Hex)`;
      }
      return `hex: ${bytesToHex(out)}
(\u6587\u672C \u2192 \u8F93\u51FA Hex\uFF0C\u628A Hex \u7C98\u56DE\u8F93\u5165\u6846\u5373\u89E3\u5BC6\u8FD8\u539F\u539F\u6587)`;
    }
  };
  var MORSE = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "/": "-..-.",
    "@": ".--.-.",
    "-": "-....-"
  };
  var morseTool = {
    id: "crypto-morse",
    group: "crypto",
    title: "\u6469\u65AF\u5BC6\u7801",
    desc: "\u6587\u672C \u2194 \u6469\u65AF\u7535\u7801\uFF08\u7A7A\u683C\u5206\u5B57\u7B26\uFF0C/ \u5206\u5355\u8BCD\uFF09",
    sample: "SOS hello",
    options: [
      actionOption("encode", [
        { value: "encode", label: "\u7F16\u7801" },
        { value: "decode", label: "\u89E3\u7801" }
      ])
    ],
    run(input, o) {
      if (o.action === "encode") {
        return input.toLowerCase().split(/\s+/).map((word) => [...word].map((c) => MORSE[c] || "?").join(" ")).join(" / ");
      }
      const REV = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));
      return input.trim().split(/\s*\/\s*|\s{3}/).map((word) => word.trim().split(/\s+/).map((c) => REV[c] || "?").join("")).join(" ");
    }
  };
  var caesarTool = {
    id: "crypto-caesar",
    group: "crypto",
    title: "\u51EF\u6492\u5BC6\u7801",
    desc: "\u5B57\u6BCD\u4F4D\u79FB\u52A0\u5BC6/\u89E3\u5BC6\uFF08\u4FDD\u7559\u5927\u5C0F\u5199\u4E0E\u975E\u5B57\u6BCD\uFF09",
    sample: "Hello, Caesar!",
    options: [
      { key: "shift", label: "\u4F4D\u79FB", type: "segment", default: "3", options: ["1", "3", "5", "13", "25"].map((v) => ({ value: v, label: v })) },
      actionOption("encode", [
        { value: "encode", label: "\u52A0\u5BC6" },
        { value: "decode", label: "\u89E3\u5BC6" }
      ])
    ],
    run(input, o) {
      let shift = Number(o.shift) || 3;
      if (o.action === "decode") shift = (26 - shift) % 26;
      return input.replace(/[a-zA-Z]/g, (c) => {
        const base = c <= "Z" ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
      });
    }
  };
  var HASH_TOOLS = [digestTool, fileHashTool, hmacTool];
  var CRYPTO_TOOLS = [aesTool, xorTool, rc4Tool, morseTool, caesarTool];

  // src/tools/text.js
  function diffLines(a, b) {
    const A = lines(a);
    const B = lines(b);
    const n = A.length;
    const m = B.length;
    const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    for (let i2 = n - 1; i2 >= 0; i2--) {
      for (let j2 = m - 1; j2 >= 0; j2--) {
        dp[i2][j2] = A[i2] === B[j2] ? dp[i2 + 1][j2 + 1] + 1 : Math.max(dp[i2 + 1][j2], dp[i2][j2 + 1]);
      }
    }
    const out = [];
    let i = 0;
    let j = 0;
    while (i < n && j < m) {
      if (A[i] === B[j]) {
        out.push(`  ${A[i]}`);
        i++;
        j++;
      } else if (dp[i + 1][j] >= dp[i][j + 1]) {
        out.push(`- ${A[i]}`);
        i++;
      } else {
        out.push(`+ ${B[j]}`);
        j++;
      }
    }
    while (i < n) {
      out.push(`- ${A[i]}`);
      i++;
    }
    while (j < m) {
      out.push(`+ ${B[j]}`);
      j++;
    }
    return out;
  }
  var diffTool = {
    id: "text-diff",
    group: "text",
    title: "\u6587\u672C\u5BF9\u6BD4",
    desc: "\u9010\u884C diff\uFF08`-` \u5220\u9664 `+` \u65B0\u589E\uFF09\u3002\u7528\u6CD5\uFF1A\u7B2C\u4E00\u884C\u8F93\u5165 `<<<` \u4F5C\u4E3A\u5206\u9694\uFF0C\u4E0A\u65B9\u4E3A A \u4E0B\u65B9\u4E3A B",
    sample: "apple\nbanana\ncherry\n<<<\napple\nbanana\norange\ngrape",
    options: [],
    run(input) {
      const sep = input.split("\n").findIndex((l) => l.trim() === "<<<");
      if (sep < 0) throw new Error("\u8BF7\u5728\u4E2D\u95F4\u63D2\u5165\u4E00\u884C <<< \u5206\u9694\u4E24\u4FA7\u6587\u672C");
      const a = lines(input).slice(0, sep).join("\n");
      const b = lines(input).slice(sep + 1).join("\n");
      return diffLines(a, b).join("\n");
    }
  };
  var dedupeTool = {
    id: "text-dedupe",
    group: "text",
    title: "\u6587\u672C\u53BB\u91CD\u6392\u5E8F",
    desc: "\u6309\u884C\u53BB\u91CD\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7A7A\u884C",
    sample: "banana\napple\ncherry\napple\nbanana",
    options: [
      { key: "sort", label: "\u6392\u5E8F", type: "segment", default: "none", options: [
        { value: "none", label: "\u539F\u987A\u5E8F" },
        { value: "asc", label: "\u5347\u5E8F" },
        { value: "desc", label: "\u964D\u5E8F" }
      ] },
      { key: "numeric", label: "\u6570\u5B57\u6392\u5E8F", type: "switch", default: false },
      { key: "trim", label: "\u53BB\u7A7A\u884C", type: "switch", default: true }
    ],
    run(input, o) {
      let ls = lines(input).map((l) => l.trim());
      if (o.trim) ls = ls.filter(Boolean);
      const seen = /* @__PURE__ */ new Set();
      ls = ls.filter((l) => seen.has(l) ? false : (seen.add(l), true));
      if (o.sort !== "none") {
        const cmp = o.numeric ? (a, b) => (Number(a) || 0) - (Number(b) || 0) : (a, b) => a.localeCompare(b, "zh");
        ls.sort(cmp);
        if (o.sort === "desc") ls.reverse();
      }
      return ls.join("\n");
    }
  };
  var countTool = {
    id: "text-count",
    group: "text",
    title: "\u6587\u672C\u91CD\u590D\u7EDF\u8BA1",
    desc: "\u6309\u884C\u7EDF\u8BA1\u51FA\u73B0\u6B21\u6570\uFF0C\u6309\u6B21\u6570\u964D\u5E8F",
    sample: "apple\nbanana\napple\ncherry\napple\nbanana",
    options: [
      { key: "mode", label: "\u7EDF\u8BA1\u7C92\u5EA6", type: "segment", default: "line", options: [
        { value: "line", label: "\u6309\u884C" },
        { value: "char", label: "\u6309\u5B57\u7B26" },
        { value: "word", label: "\u6309\u5355\u8BCD" }
      ] }
    ],
    run(input, o) {
      const counter = /* @__PURE__ */ new Map();
      const add = (k) => counter.set(k, (counter.get(k) || 0) + 1);
      if (o.mode === "line") lines(input).forEach((l) => l.trim() && add(l.trim()));
      else if (o.mode === "char") [...input.replace(/\s/g, "")].forEach(add);
      else input.match(/[\p{L}\p{N}']+/gu)?.forEach(add);
      const sorted = [...counter.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      const total = sorted.reduce((s, [, c]) => s + c, 0);
      return [`\u603B\u8BA1 ${total} \u4E2A${o.mode === "line" ? "\u884C" : o.mode === "char" ? "\u5B57\u7B26" : "\u8BCD"}\uFF0C${sorted.length} \u79CD`, "", ...sorted.map(([k, c]) => `${String(c).padStart(4)}  ${k}`)].join("\n");
    }
  };
  var wcTool = {
    id: "text-wc",
    group: "text",
    title: "\u5B57\u6570\u7EDF\u8BA1",
    desc: "\u5B57\u7B26\u6570\u3001\u5355\u8BCD\u6570\u3001\u884C\u6570\u3001\u4E2D\u82F1\u6587\u5B57\u6570",
    sample: "Hello \u6DF1\u7814\u541B\uFF0Cthis is a toolbox.\n\u7B2C\u4E8C\u884C\u5185\u5BB9\u3002",
    options: [],
    run(input) {
      const chars = [...input].length;
      const cjk = (input.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
      const words = (input.match(/[\p{L}\p{N}']+/gu) || []).length;
      const lineCount = lines(input).length;
      const noSpace = input.replace(/\s/g, "").length;
      const bytes = new TextEncoder().encode(input).length;
      return [
        `\u5B57\u7B26\u6570\uFF08\u542B\u7A7A\u683C\uFF09: ${chars}`,
        `\u5B57\u7B26\u6570\uFF08\u4E0D\u542B\u7A7A\u683C\uFF09: ${noSpace}`,
        `\u4E2D\u6587\u5B57\u6570: ${cjk}`,
        `\u82F1\u6587\u5355\u8BCD\u6570: ${words}`,
        `\u884C\u6570: ${lineCount}`,
        `UTF-8 \u5B57\u8282\u6570: ${bytes}`
      ].join("\n");
    }
  };
  var lineTool = {
    id: "text-line",
    group: "text",
    title: "\u884C\u5904\u7406",
    desc: "\u884C\u9996\u5C3E\u6DFB\u52A0\u6587\u672C / \u884C\u8FC7\u6EE4\uFF08\u6B63\u5219\uFF09/ \u622A\u53D6",
    sample: "const a = 1;\nconst b = 2;\nlet c = 3;",
    options: [
      actionOption("prefix", [
        { value: "prefix", label: "\u52A0\u524D\u7F00" },
        { value: "suffix", label: "\u52A0\u540E\u7F00" },
        { value: "filter", label: "\u6B63\u5219\u4FDD\u7559" },
        { value: "remove", label: "\u6B63\u5219\u5220\u9664" },
        { value: "slice", label: "\u622A\u53D6\u884C\u8303\u56F4" },
        { value: "trim", label: "\u53BB\u9996\u5C3E\u7A7A\u767D" }
      ]),
      { key: "str", label: "\u6587\u672C / \u6B63\u5219", type: "text", default: "", placeholder: "\u524D\u7F00\u6587\u672C\u6216 /regex/" },
      { key: "range", label: "\u884C\u8303\u56F4 (start,end)", type: "text", default: "1,10", placeholder: "1,10" }
    ],
    run(input, o) {
      let ls = lines(input);
      const s = o.str || "";
      switch (o.action) {
        case "prefix":
          return ls.map((l) => s + l).join("\n");
        case "suffix":
          return ls.map((l) => l + s).join("\n");
        case "trim":
          return ls.map((l) => l.trim()).join("\n");
        case "filter":
        case "remove": {
          const re = s.startsWith("/") && s.lastIndexOf("/") > 0 ? new RegExp(s.slice(1, s.lastIndexOf("/")), s.slice(s.lastIndexOf("/") + 1) || void 0) : new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
          return ls.filter((l) => o.action === "filter" ? re.test(l) : !re.test(l)).join("\n");
        }
        case "slice": {
          const [a, b] = String(o.range).split(",").map((x) => parseInt(x, 10));
          return ls.slice((a || 1) - 1, b || ls.length).join("\n");
        }
        default:
          return input;
      }
    }
  };
  var regexTool = {
    id: "text-regex",
    group: "text",
    title: "\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u5668",
    desc: "\u5B9E\u65F6\u5339\u914D\u6D4B\u8BD5\uFF0C\u8F93\u51FA\u6BCF\u4E2A\u5339\u914D\u7684\u5206\u7EC4\u4E0E\u4F4D\u7F6E",
    sample: "/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,}/g\n\u8054\u7CFB alice@example.com \u6216 bob@test.org",
    options: [],
    run(input) {
      const nl = input.indexOf("\n");
      if (nl < 0) throw new Error("\u7B2C\u4E00\u884C\u8F93\u5165\u6B63\u5219\uFF08\u5982 /ab+c/gi\uFF09\uFF0C\u5176\u4F59\u884C\u4E3A\u6D4B\u8BD5\u6587\u672C");
      const first = input.slice(0, nl).trim();
      const text = input.slice(nl + 1);
      let re;
      try {
        const m = first.match(/^\/(.*)\/([a-z]*)$/s);
        re = m ? new RegExp(m[1], m[2].includes("g") ? m[2] : m[2] + "g") : new RegExp(first, "g");
      } catch (e) {
        throw new Error(`\u6B63\u5219\u4E0D\u5408\u6CD5\uFF1A${e.message}`);
      }
      const rows = [];
      let match;
      let count = 0;
      while ((match = re.exec(text)) && count < 200) {
        count++;
        const lineNo = text.slice(0, match.index).split("\n").length;
        rows.push(`#${count} [${match.index}] \u7B2C${lineNo}\u884C: "${match[0]}"`);
        if (match.length > 1) {
          match.slice(1).forEach((g, gi) => rows.push(`    $${gi + 1} = ${g === void 0 ? "(\u672A\u5339\u914D)" : `"${g}"`}`));
        }
        if (match[0] === "") re.lastIndex++;
      }
      if (!count) rows.push("\uFF08\u65E0\u5339\u914D\uFF09");
      return rows.join("\n");
    }
  };
  var kvTool = {
    id: "text-kv",
    group: "text",
    title: "\u952E\u503C\u5BF9\u8F6C\u4EE3\u7801",
    desc: "key=value \u6587\u672C\u8F6C JSON / \u73AF\u5883\u53D8\u91CF / Go map / Java Properties",
    sample: "DB_HOST=localhost\nDB_PORT=5432\nAPP_NAME=toolbox",
    options: [
      { key: "target", label: "\u76EE\u6807\u683C\u5F0F", type: "segment", default: "json", options: [
        { value: "json", label: "JSON" },
        { value: "env", label: "env \u6587\u4EF6" },
        { value: "go", label: "Go map" },
        { value: "java", label: "Properties" }
      ] },
      { key: "sep", label: "\u5206\u9694\u7B26", type: "segment", default: "=", options: [
        { value: "=", label: "=" },
        { value: ":", label: ":" },
        { value: "space", label: "\u7A7A\u683C" }
      ] }
    ],
    run(input, o) {
      const sep = o.sep === "space" ? /\s+/ : o.sep;
      const pairs = [];
      for (const l of lines(input)) {
        const t = l.trim();
        if (!t || t.startsWith("#")) continue;
        const idx = typeof sep === "string" ? t.indexOf(sep) : t.search(sep);
        if (idx < 0) throw new Error(`\u884C\u300C${t}\u300D\u7F3A\u5C11\u5206\u9694\u7B26`);
        pairs.push([t.slice(0, idx).trim(), t.slice(idx + 1).trim()]);
      }
      if (!pairs.length) throw new Error("\u672A\u89E3\u6790\u5230\u952E\u503C\u5BF9");
      switch (o.target) {
        case "json":
          return JSON.stringify(Object.fromEntries(pairs), null, 2);
        case "env":
          return pairs.map(([k, v]) => `${k.toUpperCase().replace(/[^A-Z0-9_]/g, "_")}=${v}`).join("\n");
        case "go":
          return `map[string]string{
${pairs.map(([k, v]) => `	"${k}": "${v}",`).join("\n")}
}`;
        case "java":
          return pairs.map(([k, v]) => `${k} = ${v}`).join("\n");
        default:
          return input;
      }
    }
  };
  var TEXT_TOOLS = [diffTool, dedupeTool, countTool, wcTool, lineTool, regexTool, kvTool];

  // src/tools/numtime.js
  var chmodTool = {
    id: "num-chmod",
    group: "num",
    title: "chmod \u8BA1\u7B97\u5668",
    desc: "\u6743\u9650\u6570\u5B57 \u2194 rwx \u5B57\u7B26\u4E32\u4E92\u8F6C",
    sample: "755",
    options: [
      actionOption("fromNum", [
        { value: "fromNum", label: "\u6570\u5B57 \u2192 \u5B57\u7B26" },
        { value: "fromStr", label: "\u5B57\u7B26 \u2192 \u6570\u5B57" }
      ])
    ],
    run(input, o) {
      if (o.action === "fromNum") {
        const m = input.trim().match(/^([0-7])([0-7]{3})$/) || input.trim().match(/^([0-7]{3})$/);
        if (!m) throw new Error("\u8BF7\u8F93\u5165 3~4 \u4F4D\u516B\u8FDB\u5236\uFF0C\u5982 755 \u6216 4755");
        const full = m[2] !== void 0 ? input.trim() : `0${input.trim()}`;
        const special2 = Number(full[0]);
        const digits = full.slice(1).split("").map(Number);
        const who = ["Owner", "Group", "Other"];
        const rows = [];
        digits.forEach((d, i) => {
          const r = d & 4 ? "r" : "-";
          const w = d & 2 ? "w" : "-";
          let x = d & 1 ? "x" : "-";
          if (i === 0 && special2 & 4) x = d & 1 ? "s" : "S";
          if (i === 1 && special2 & 2) x = d & 1 ? "s" : "S";
          if (i === 2 && special2 & 1) x = d & 1 ? "t" : "T";
          rows.push(`${who[i]} (${d}): ${r + w + x}`);
        });
        const str = digits.map((d) => (d & 4 ? "r" : "-") + (d & 2 ? "w" : "-") + (d & 1 ? "x" : "-")).join("");
        return `${rows.join("\n")}

\u7B26\u53F7\u8868\u793A: ${str}${special2 ? `\uFF08\u7279\u6B8A\u4F4D ${special2}\uFF09` : ""}`;
      }
      const s = input.trim();
      if (!/^[rwxstSST-]{9}$/.test(s)) throw new Error("\u8BF7\u8F93\u5165 9 \u4F4D rwx \u5B57\u7B26\u4E32\uFF0C\u5982 rwxr-xr-x");
      let num = "";
      for (let g = 0; g < 3; g++) {
        const t = s.slice(g * 3, g * 3 + 3);
        num += (t[0] === "r" ? 4 : 0) + (t[1] === "w" ? 2 : 0) + (t[2] === "x" || t[2] === "s" || t[2] === "t" ? 1 : 0);
      }
      let special = 0;
      if (/[sS]/.test(s[2])) special += 4;
      if (/[sS]/.test(s[5])) special += 2;
      if (/[tT]/.test(s[8])) special += 1;
      return `chmod ${special ? special : ""}${num}`;
    }
  };
  var ieeeTool = {
    id: "num-ieee754",
    group: "num",
    title: "IEEE 754 \u6D6E\u70B9\u6570",
    desc: "Float32/64 \u2194 \u5341\u516D\u8FDB\u5236\u5B57\u8282\u8868\u793A",
    sample: "3.1415926",
    options: [
      { key: "type", label: "\u7CBE\u5EA6", type: "segment", default: "f32", options: [
        { value: "f32", label: "Float32" },
        { value: "f64", label: "Float64" }
      ] }
    ],
    run(input, o) {
      const isF32 = o.type === "f32";
      const bytes = new Uint8Array(isF32 ? 4 : 8);
      const dv = new DataView(bytes.buffer);
      const val = Number(input);
      if (Number.isNaN(val)) throw new Error("\u8BF7\u8F93\u5165\u5408\u6CD5\u6570\u5B57");
      if (isF32) dv.setFloat32(0, val);
      else dv.setFloat64(0, val);
      const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
      const total = bytes.length * 8;
      const bits = [...bytes].map((b) => b.toString(2).padStart(8, "0")).join("");
      const eBits = isF32 ? 8 : 11;
      const sign = bits[0];
      const exp = bits.slice(1, 1 + eBits);
      const frac = bits.slice(1 + eBits);
      return [
        `\u5341\u8FDB\u5236: ${val}`,
        `\u5341\u516D\u8FDB\u5236: ${hex}`,
        `\u4F4D\u62C6\u5206 (1\u7B26\u53F7/${eBits}\u6307\u6570/${total - 1 - eBits}\u5C3E\u6570):`,
        `  \u7B26\u53F7: ${sign} (${Number(sign) ? "\u8D1F" : "\u6B63"})`,
        `  \u6307\u6570: ${exp} = ${parseInt(exp, 2)}\uFF08\u504F\u79FB ${isF32 ? 127 : 1023}\uFF09`,
        `  \u5C3E\u6570: ${frac}`
      ].join("\n");
    }
  };
  var complementTool = {
    id: "num-complement",
    group: "num",
    title: "\u539F\u7801/\u53CD\u7801/\u8865\u7801",
    desc: "\u6574\u6570\u5728 8/16/32 \u4F4D\u4E0B\u7684\u539F\u7801\u3001\u53CD\u7801\u3001\u8865\u7801",
    sample: "-42",
    options: [
      { key: "bits", label: "\u4F4D\u5BBD", type: "segment", default: "8", options: ["8", "16", "32"].map((v) => ({ value: v, label: `${v} \u4F4D` })) }
    ],
    run(input, o) {
      const n = Number(input.trim());
      if (!Number.isInteger(n)) throw new Error("\u8BF7\u8F93\u5165\u6574\u6570");
      const bits = Number(o.bits);
      const limit = 2 ** (bits - 1);
      if (n >= limit || n < -limit) throw new Error(`${bits} \u4F4D\u6709\u7B26\u53F7\u6574\u6570\u8303\u56F4\u4E3A ${-limit} ~ ${limit - 1}`);
      const pad = (s) => s.padStart(bits, "0").replace(/(.{4})(?=.)/g, "$1 ");
      if (n >= 0) {
        const b = pad(n.toString(2));
        return `\u5341\u8FDB\u5236: ${n}
\u539F\u7801: ${b}
\u53CD\u7801: ${b}
\u8865\u7801: ${b}`;
      }
      const grp = (s) => s.replace(/(.{4})(?=.)/g, "$1 ");
      const magBits = (-n | limit).toString(2).padStart(bits, "0");
      const invBits = magBits[0] + [...magBits.slice(1)].map((c) => c === "0" ? "1" : "0").join("");
      const arr = [...invBits];
      for (let k = arr.length - 1; k >= 0; k--) {
        if (arr[k] === "0") {
          arr[k] = "1";
          break;
        }
        arr[k] = "0";
      }
      return `\u5341\u8FDB\u5236: ${n}
\u539F\u7801: ${grp(magBits)}\uFF08\u7B26\u53F71 + \u7EDD\u5BF9\u503C\uFF09
\u53CD\u7801: ${grp(invBits)}\uFF08\u7B26\u53F7\u4F4D\u4E0D\u53D8\uFF0C\u5176\u4F59\u53D6\u53CD\uFF09
\u8865\u7801: ${grp(arr.join(""))}\uFF08\u53CD\u7801 + 1\uFF09`;
    }
  };
  var modpowTool = {
    id: "num-modpow",
    group: "num",
    title: "\u6A21\u5E42\u8BA1\u7B97\u5668",
    desc: "\u8BA1\u7B97 base^exp mod m\uFF08BigInt\uFF0C\u652F\u6301\u8D85\u5927\u6570\uFF09",
    sample: "7\n30\n57",
    options: [],
    run(input) {
      const [b, e, m] = lines(input).map((l) => BigInt(l.trim()));
      if (m === 0n) throw new Error("\u6A21\u6570\u4E0D\u80FD\u4E3A 0");
      let result = 1n;
      let base = (b % m + m) % m;
      let exp = e;
      while (exp > 0n) {
        if (exp & 1n) result = result * base % m;
        base = base * base % m;
        exp >>= 1n;
      }
      return `${b}^${e} mod ${m} = ${result}`;
    }
  };
  var hexCalcTool = {
    id: "num-hexcalc",
    group: "num",
    title: "\u5341\u516D\u8FDB\u5236\u8BA1\u7B97\u5668",
    desc: "\u652F\u6301 0x \u524D\u7F00\u7684\u52A0\u51CF\u4E58\u9664\u4E0E\u4F4D\u8FD0\u7B97\u8868\u8FBE\u5F0F\uFF08\u5927\u6574\u6570\uFF09",
    sample: "0xFF + 0x10 * 2",
    options: [],
    run(input) {
      const expr = input.trim();
      if (!/^[\dxXa-fA-F+\-*/%&|^~()<>!\s]+$/.test(expr)) throw new Error("\u53EA\u5141\u8BB8\u6570\u5B57\u30010x \u5341\u516D\u8FDB\u5236\u4E0E + - * / % & | ^ ~ << >> () !");
      const js = expr.replace(/(\b0[xX][0-9a-fA-F]+\b)|(\b\d+\b)/g, (m0) => `${m0}n`);
      let result;
      try {
        result = Function(`"use strict"; return (${js})`)();
      } catch (e) {
        throw new Error(`\u8868\u8FBE\u5F0F\u9519\u8BEF\uFF1A${e.message}`);
      }
      if (typeof result !== "bigint" && typeof result !== "number") throw new Error("\u7ED3\u679C\u4E0D\u662F\u6570\u503C");
      const big = BigInt(result);
      const signed = (b, bits = 64) => {
        const mod = 1n << BigInt(bits);
        const v = (b % mod + mod) % mod;
        return v >= mod / 2n ? v - mod : v;
      };
      return [
        `\u5341\u8FDB\u5236: ${big}`,
        `\u5341\u516D\u8FDB\u5236: 0x${big < 0n ? "-" : ""}${(big < 0n ? -big : big).toString(16).toUpperCase()}`,
        `\u4E8C\u8FDB\u5236: ${big.toString(2).replace(/(.{4})(?=.)/g, "$1 ")}`,
        `(int64): ${signed(big)}`
      ].join("\n");
    }
  };
  var tsTool = {
    id: "time-unix",
    group: "time",
    title: "Unix \u65F6\u95F4\u6233\u8F6C\u6362",
    desc: "\u65F6\u95F4\u6233 \u2194 \u65E5\u671F\u53CC\u5411\u8F6C\u6362\uFF08\u8F93\u5165\u6570\u5B57\u6309\u65F6\u95F4\u6233\uFF0C\u8F93\u5165\u65E5\u671F\u6309\u8F6C\u6362\uFF09",
    sample: "1730000000",
    options: [
      { key: "unit", label: "\u5355\u4F4D", type: "segment", default: "s", options: [
        { value: "s", label: "\u79D2" },
        { value: "ms", label: "\u6BEB\u79D2" }
      ] }
    ],
    run(input, o) {
      const now = Date.now();
      const t = input.trim();
      const fmt = (ms) => ({
        local: new Date(ms).toLocaleString("zh-CN", { hour12: false }),
        iso: new Date(ms).toISOString()
      });
      if (/^\d{10,16}$/.test(t)) {
        let ms = Number(t);
        if (o.unit === "s" || t.length === 10) ms *= 1e3;
        const { local, iso } = fmt(ms);
        return [
          `\u65F6\u95F4\u6233: ${t}`,
          `\u672C\u5730\u65F6\u95F4: ${local}`,
          `ISO (UTC): ${iso}`,
          `\u76F8\u5BF9\u73B0\u5728: ${Math.round((ms - now) / 864e5)} \u5929`,
          "",
          "\u5F53\u524D\u65F6\u95F4\u6233:",
          `  \u79D2: ${Math.floor(now / 1e3)}`,
          `  \u6BEB\u79D2: ${now}`
        ].join("\n");
      }
      const d = new Date(t);
      if (Number.isNaN(d.getTime())) throw new Error("\u65E0\u6CD5\u8BC6\u522B\u7684\u65E5\u671F\u65F6\u95F4\uFF08\u652F\u6301 2024-01-01 12:00:00 \u683C\u5F0F\uFF09");
      return [
        `\u8F93\u5165: ${t}`,
        `Unix \u79D2: ${Math.floor(d.getTime() / 1e3)}`,
        `Unix \u6BEB\u79D2: ${d.getTime()}`,
        `ISO (UTC): ${d.toISOString()}`,
        "",
        "\u5F53\u524D\u65F6\u95F4\u6233:",
        `  \u79D2: ${Math.floor(now / 1e3)}`,
        `  \u6BEB\u79D2: ${now}`
      ].join("\n");
    }
  };
  var CRON_FIELDS = [
    { name: "\u5206\u949F", min: 0, max: 59 },
    { name: "\u5C0F\u65F6", min: 0, max: 23 },
    { name: "\u65E5", min: 1, max: 31 },
    { name: "\u6708", min: 1, max: 12 },
    { name: "\u661F\u671F", min: 0, max: 6 }
  ];
  var WEEK_NAMES = ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"];
  function parseCronField(field, { min, max, isWeek }) {
    const values = /* @__PURE__ */ new Set();
    const expand = (part) => {
      let step = 1;
      let range = part;
      if (part.includes("/")) {
        [range, step] = part.split("/");
        step = Number(step);
        if (!step || step < 1) throw new Error(`\u6B65\u957F\u4E0D\u5408\u6CD5: ${part}`);
      }
      let lo = min;
      let hi = max;
      if (range !== "*" && range !== "") {
        if (range.includes("-")) {
          [lo, hi] = range.split("-").map(Number);
        } else {
          lo = hi = Number(range);
        }
        if (Number.isNaN(lo) || Number.isNaN(hi)) throw new Error(`\u5B57\u6BB5\u4E0D\u5408\u6CD5: ${part}`);
      }
      if (lo < min || hi > max || lo > hi) throw new Error(`\u5B57\u6BB5\u8D8A\u754C: ${part}\uFF08\u8303\u56F4 ${min}-${max}\uFF09`);
      for (let v = lo; v <= hi; v += step) values.add(v);
    };
    field.split(",").forEach(expand);
    if (!values.size) throw new Error("\u5B57\u6BB5\u4E3A\u7A7A");
    return [...values].sort((a, b) => a - b);
  }
  var cronTool = {
    id: "time-cron",
    group: "time",
    title: "Cron \u8868\u8FBE\u5F0F\u89E3\u6790",
    desc: "\u89E3\u6790 5 \u4F4D Cron \u8868\u8FBE\u5F0F\u5E76\u8BA1\u7B97\u672A\u6765 5 \u6B21\u6267\u884C\u65F6\u95F4",
    sample: "30 9 * * 1-5",
    options: [],
    run(input) {
      const parts = input.trim().split(/\s+/);
      if (parts.length !== 5) throw new Error("Cron \u8868\u8FBE\u5F0F\u9700\u4E3A 5 \u4F4D\uFF1A\u5206 \u65F6 \u65E5 \u6708 \u661F\u671F");
      const parsed = parts.map((p, i) => parseCronField(p, { ...CRON_FIELDS[i], isWeek: i === 4 }));
      const desc = parsed.map((vals, i) => {
        const f = CRON_FIELDS[i];
        let vs = vals;
        if (i === 4) vs = vals.map((v) => WEEK_NAMES[v] ?? v);
        return `${f.name}: ${parts[i] === "*" ? "\u6BCF" + f.name : vs.join(", ")}`;
      }).join("\n");
      const next = [];
      const cur = /* @__PURE__ */ new Date();
      cur.setSeconds(0, 0);
      cur.setMinutes(cur.getMinutes() + 1);
      const limit = new Date(cur.getTime() + 366 * 864e5);
      while (next.length < 5 && cur < limit) {
        if (parsed[0].includes(cur.getMinutes()) && parsed[1].includes(cur.getHours()) && parsed[2].includes(cur.getDate()) && parsed[3].includes(cur.getMonth() + 1) && parsed[4].includes(cur.getDay())) {
          next.push(cur.toLocaleString("zh-CN", { hour12: false }));
        }
        cur.setMinutes(cur.getMinutes() + 1);
      }
      return `${desc}

\u672A\u6765 5 \u6B21\u6267\u884C:
${next.map((t, i) => `${i + 1}. ${t}`).join("\n") || "\uFF08\u4E00\u5E74\u5185\u65E0\u6267\u884C\uFF09"}`;
    }
  };
  var dateCalcTool = {
    id: "time-datecalc",
    group: "time",
    title: "\u65E5\u671F\u8BA1\u7B97\u5668",
    desc: "\u4E24\u4E2A\u65E5\u671F\u76F8\u5DEE\u5929\u6570\uFF0C\u6216\u65E5\u671F\u52A0\u51CF N \u5929",
    sample: "2024-01-01\n2025-06-30",
    options: [
      actionOption("diff", [
        { value: "diff", label: "\u65E5\u671F\u5DEE" },
        { value: "add", label: "\u52A0\u51CF\u5929\u6570" }
      ]),
      { key: "days", label: "\u5929\u6570\uFF08\u52A0\u51CF\u6A21\u5F0F\uFF09", type: "text", default: "30", placeholder: "\u5982 30 \u6216 -7" }
    ],
    run(input, o) {
      const ls = lines(input).map((l) => l.trim()).filter(Boolean);
      const parse = (s) => {
        const d2 = new Date(s);
        if (Number.isNaN(d2.getTime())) throw new Error(`\u65E5\u671F\u4E0D\u5408\u6CD5: ${s}`);
        return d2;
      };
      if (o.action === "diff") {
        if (ls.length < 2) throw new Error("\u8BF7\u8F93\u5165\u4E24\u884C\u65E5\u671F");
        const a = parse(ls[0]);
        const b = parse(ls[1]);
        const days = Math.round((b - a) / 864e5);
        return [
          `${ls[0]} \u2192 ${ls[1]}`,
          `\u76F8\u5DEE: ${days} \u5929\uFF08\u7EA6 ${(days / 30.44).toFixed(1)} \u4E2A\u6708 / ${(days / 365.25).toFixed(2)} \u5E74\uFF09`,
          `\u661F\u671F: ${WEEK_NAMES[a.getDay()]} \u2192 ${WEEK_NAMES[b.getDay()]}`
        ].join("\n");
      }
      if (!ls.length) throw new Error("\u8BF7\u8F93\u5165\u8D77\u59CB\u65E5\u671F");
      const d = parse(ls[0]);
      const n = Number(o.days);
      if (Number.isNaN(n)) throw new Error("\u5929\u6570\u9700\u4E3A\u6570\u5B57");
      const out = new Date(d.getTime() + n * 864e5);
      return `${ls[0]} ${n >= 0 ? "+" : ""}${n} \u5929 = ${out.toLocaleDateString("zh-CN")}\uFF08${WEEK_NAMES[out.getDay()]}\uFF09`;
    }
  };
  var leapTool = {
    id: "time-leap",
    group: "time",
    title: "\u95F0\u5E74\u67E5\u8BE2",
    desc: "\u5224\u65AD\u5E74\u4EFD\u662F\u5426\u95F0\u5E74\uFF0C\u5217\u51FA\u8303\u56F4\u5185\u95F0\u5E74",
    sample: "2024",
    options: [],
    run(input) {
      const isLeap = (y) => y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
      const nums = lines(input).map((l) => parseInt(l.trim(), 10)).filter((n) => !Number.isNaN(n) && n > 0);
      if (!nums.length) throw new Error("\u8BF7\u8F93\u5165\u5E74\u4EFD");
      if (nums.length === 1) {
        const y = nums[0];
        return `${y} \u5E74${isLeap(y) ? "\u662F" : "\u4E0D\u662F"}\u95F0\u5E74\uFF08${isLeap(y) ? 366 : 365} \u5929\uFF09`;
      }
      const [a, b] = nums;
      const leaps = [];
      for (let y = a; y <= b && leaps.length < 100; y++) if (isLeap(y)) leaps.push(y);
      return `${a}~${b} \u4E4B\u95F4\u7684\u95F0\u5E74\uFF08${leaps.length} \u4E2A\uFF0C\u6700\u591A\u663E\u793A 100\uFF09:
${leaps.join(", ")}`;
    }
  };
  var rmbTool = {
    id: "num-rmb",
    group: "num",
    title: "\u4EBA\u6C11\u5E01\u5927\u5199\u8F6C\u6362",
    desc: "\u6570\u5B57\u91D1\u989D \u2192 \u4EBA\u6C11\u5E01\u5927\u5199\uFF08\u652F\u7968/\u5408\u540C\u7528\uFF09",
    sample: "1024.50",
    options: [],
    run(input) {
      const n = Number(input.trim().replace(/[,，]/g, ""));
      if (Number.isNaN(n) || n < 0) throw new Error("\u8BF7\u8F93\u5165\u975E\u8D1F\u91D1\u989D");
      if (n >= 1e16) throw new Error("\u91D1\u989D\u8FC7\u5927\uFF08\u22651\u4E07\u4EBF\u4EBF\uFF09");
      const DIGITS = "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396";
      const UNITS = ["", "\u62FE", "\u4F70", "\u4EDF"];
      const GROUPS2 = ["", "\u4E07", "\u4EBF", "\u4E07\u4EBF"];
      const intPart = Math.floor(n);
      const decPart = Math.round((n - intPart) * 100);
      const group4 = (num) => {
        let s = "";
        let zero = false;
        for (let i = 3; i >= 0; i--) {
          const d = Math.floor(num / 10 ** i) % 10;
          if (d === 0) {
            zero = s.length > 0;
          } else {
            if (zero && s) s += "\u96F6";
            s += DIGITS[d] + UNITS[i];
            zero = false;
          }
        }
        return s;
      };
      let out = "";
      if (intPart === 0) out = "\u96F6";
      else {
        const parts = [];
        let rest = intPart;
        let gi = 0;
        while (rest > 0) {
          parts.unshift([rest % 1e4, GROUPS2[gi]]);
          rest = Math.floor(rest / 1e4);
          gi++;
        }
        parts.forEach(([g, unit], idx) => {
          if (g === 0) return;
          const needZero = idx > 0 && g < 1e3;
          out += (needZero ? "\u96F6" : "") + group4(g) + unit;
        });
      }
      out += "\u5143";
      if (decPart === 0) out += "\u6574";
      else {
        const jiao = Math.floor(decPart / 10);
        const fen = decPart % 10;
        if (jiao) out += DIGITS[jiao] + "\u89D2";
        else if (fen) out += "\u96F6";
        if (fen) out += DIGITS[fen] + "\u5206";
        else out += "\u6574";
      }
      return `${n.toLocaleString("zh-CN")} \u2192 ${out}`;
    }
  };
  var bmiTool = {
    id: "num-bmi",
    group: "num",
    title: "BMI \u8BA1\u7B97\u5668",
    desc: "\u8EAB\u9AD8\u4F53\u91CD\u7B97 BMI \u4E0E\u5065\u5EB7\u533A\u95F4",
    sample: "175\n70",
    options: [],
    run(input) {
      const [h4, w] = lines(input).map((l) => Number(l.trim()));
      if (!h4 || !w || h4 < 50 || h4 > 250 || w < 10 || w > 400) throw new Error("\u7B2C\u4E00\u884C\u8EAB\u9AD8(cm)\u3001\u7B2C\u4E8C\u884C\u4F53\u91CD(kg)");
      const bmi = w / (h4 / 100) ** 2;
      const level = bmi < 18.5 ? "\u504F\u7626" : bmi < 24 ? "\u6B63\u5E38" : bmi < 28 ? "\u8D85\u91CD" : "\u80A5\u80D6";
      const ideal = [18.5 * (h4 / 100) ** 2, 24 * (h4 / 100) ** 2];
      return `BMI = ${bmi.toFixed(1)}\uFF08${level}\uFF09
\u5065\u5EB7\u4F53\u91CD\u8303\u56F4: ${ideal[0].toFixed(1)} ~ ${ideal[1].toFixed(1)} kg`;
    }
  };
  var UNIT_TABLES = {
    length: {
      label: "\u957F\u5EA6",
      base: "m",
      units: {
        km: 1e3,
        m: 1,
        dm: 0.1,
        cm: 0.01,
        mm: 1e-3,
        um: 1e-6,
        nm: 1e-9,
        mile: 1609.344,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254,
        nmi: 1852
      }
    },
    weight: {
      label: "\u91CD\u91CF",
      base: "kg",
      units: {
        t: 1e3,
        kg: 1,
        g: 1e-3,
        mg: 1e-6,
        lb: 0.45359237,
        oz: 0.028349523125,
        jin: 0.5,
        liang: 0.05
      }
    },
    data: {
      label: "\u6570\u636E",
      base: "B",
      units: {
        TB: 2 ** 40,
        GB: 2 ** 30,
        MB: 2 ** 20,
        KB: 2 ** 10,
        B: 1,
        Tbit: 2 ** 37,
        Gbit: 2 ** 27,
        Mbit: 2 ** 17,
        Kbit: 2 ** 7
      }
    },
    area: {
      label: "\u9762\u79EF",
      base: "m\xB2",
      units: {
        "km\xB2": 1e6,
        "m\xB2": 1,
        "dm\xB2": 0.01,
        "cm\xB2": 1e-4,
        ha: 1e4,
        mu: 2e3 / 3,
        "ft\xB2": 0.09290304,
        "in\xB2": 64516e-8
      }
    }
  };
  var unitTool = {
    id: "num-unit",
    group: "num",
    title: "\u5355\u4F4D\u6362\u7B97",
    desc: "\u957F\u5EA6/\u91CD\u91CF/\u6570\u636E/\u9762\u79EF \u6362\u7B97\u3002\u8F93\u5165: \u6570\u91CF+\u6E90\u5355\u4F4D\uFF0C\u5982 5 km",
    sample: "5 km",
    options: [
      { key: "cat", label: "\u7C7B\u522B", type: "segment", default: "length", options: Object.entries(UNIT_TABLES).map(([v, t]) => ({ value: v, label: t.label })) }
    ],
    run(input, o) {
      const table = UNIT_TABLES[o.cat];
      const m = input.trim().match(/^([-+0-9.eE]+)\s*([a-zA-Zμμ²³]+)$/);
      if (!m) throw new Error("\u8F93\u5165\u683C\u5F0F: \u6570\u503C + \u5355\u4F4D\uFF0C\u5982 5 km");
      const value = Number(m[1]);
      const unit = m[2];
      if (!(unit in table.units)) {
        throw new Error(`\u300C${unit}\u300D\u4E0D\u662F${table.label}\u5355\u4F4D\u3002\u53EF\u7528: ${Object.keys(table.units).join(" ")}`);
      }
      const baseVal = value * table.units[unit];
      return Object.entries(table.units).map(([u, f]) => `${u.padEnd(6)}: ${baseVal / f}`).join("\n");
    }
  };
  var NUM_TOOLS = [chmodTool, ieeeTool, complementTool, modpowTool, hexCalcTool, rmbTool, bmiTool, unitTool];
  var TIME_TOOLS = [tsTool, cronTool, dateCalcTool, leapTool];

  // src/tools/misc.js
  var import_qrcode = __toESM(require_browser(), 1);
  var uuidTool = {
    id: "rand-uuid",
    group: "random",
    title: "UUID \u751F\u6210\u5668",
    desc: "\u6279\u91CF\u751F\u6210 UUID v4\uFF08crypto.getRandomValues\uFF09",
    sample: "",
    options: [
      { key: "count", label: "\u6570\u91CF", type: "segment", default: "5", options: ["1", "5", "10", "50"].map((v) => ({ value: v, label: v })) },
      { key: "upper", label: "\u5927\u5199", type: "switch", default: false }
    ],
    run(_input, o) {
      const count = Number(o.count) || 1;
      const out = [];
      for (let i = 0; i < count; i++) {
        const b = crypto.getRandomValues(new Uint8Array(16));
        b[6] = b[6] & 15 | 64;
        b[8] = b[8] & 63 | 128;
        const hex = [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
        let u = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
        if (o.upper) u = u.toUpperCase();
        out.push(u);
      }
      return out.join("\n");
    }
  };
  var passwordTool = {
    id: "rand-password",
    group: "random",
    title: "\u968F\u673A\u5BC6\u7801\u751F\u6210",
    desc: "\u53EF\u914D\u7F6E\u5B57\u7B26\u96C6\u7684\u5B89\u5168\u968F\u673A\u5BC6\u7801",
    sample: "",
    options: [
      { key: "len", label: "\u957F\u5EA6", type: "segment", default: "16", options: ["8", "12", "16", "24", "32"].map((v) => ({ value: v, label: v })) },
      { key: "count", label: "\u6570\u91CF", type: "segment", default: "5", options: ["1", "5", "10"].map((v) => ({ value: v, label: v })) },
      { key: "symbols", label: "\u542B\u7B26\u53F7", type: "switch", default: true }
    ],
    run(_input, o) {
      let chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
      if (o.symbols) chars += "!@#$%^&*()-_=+[]{};:,.?";
      const len = Number(o.len) || 16;
      const count = Number(o.count) || 5;
      const out = [];
      for (let i = 0; i < count; i++) {
        const r = crypto.getRandomValues(new Uint32Array(len));
        let pw = [...r].map((x) => chars[x % chars.length]).join("");
        if (!/\d/.test(pw)) {
          const pos = r[0] % len;
          pw = pw.slice(0, pos) + r[1] % 10 + pw.slice(pos + 1);
        }
        out.push(pw);
      }
      return out.join("\n");
    }
  };
  var randNumTool = {
    id: "rand-number",
    group: "random",
    title: "\u968F\u673A\u6570\u751F\u6210",
    desc: "\u6307\u5B9A\u8303\u56F4\u7684\u5B89\u5168\u968F\u673A\u6574\u6570",
    sample: "",
    options: [
      { key: "min", label: "\u6700\u5C0F\u503C", type: "text", default: "1" },
      { key: "max", label: "\u6700\u5927\u503C", type: "text", default: "100" },
      { key: "count", label: "\u6570\u91CF", type: "segment", default: "10", options: ["1", "10", "100"].map((v) => ({ value: v, label: v })) },
      { key: "unique", label: "\u4E0D\u91CD\u590D", type: "switch", default: false }
    ],
    run(_input, o) {
      const min = parseInt(o.min, 10);
      const max = parseInt(o.max, 10);
      const count = Number(o.count) || 1;
      if (Number.isNaN(min) || Number.isNaN(max) || min > max) throw new Error("\u8303\u56F4\u4E0D\u5408\u6CD5");
      if (o.unique && max - min + 1 < count) throw new Error("\u8303\u56F4\u5C0F\u4E8E\u6570\u91CF\uFF0C\u65E0\u6CD5\u4E0D\u91CD\u590D");
      const range = max - min + 1;
      const used = /* @__PURE__ */ new Set();
      const out = [];
      while (out.length < count) {
        const buf = crypto.getRandomValues(new Uint32Array(1));
        const v = min + buf[0] % range;
        if (o.unique) {
          if (used.has(v)) continue;
          used.add(v);
        }
        out.push(v);
      }
      return out.join(", ");
    }
  };
  var qrTool = {
    id: "qr-gen",
    group: "random",
    title: "\u4E8C\u7EF4\u7801\u751F\u6210",
    desc: "\u6587\u672C/URL \u751F\u6210\u4E8C\u7EF4\u7801\uFF08\u672C\u5730\u6E32\u67D3\uFF0C\u53EF\u4E0B\u8F7D\uFF09",
    sample: "https://www.deepseek.com",
    options: [
      { key: "size", label: "\u5C3A\u5BF8", type: "segment", default: "256", options: ["128", "256", "512"].map((v) => ({ value: v, label: v })) },
      { key: "ec", label: "\u7EA0\u9519", type: "segment", default: "M", options: ["L", "M", "Q", "H"].map((v) => ({ value: v, label: v })) }
    ],
    async run(input, o) {
      if (!input.trim()) throw new Error("\u8BF7\u8F93\u5165\u8981\u751F\u6210\u4E8C\u7EF4\u7801\u7684\u5185\u5BB9");
      const dataUrl = await import_qrcode.default.toDataURL(input, {
        width: Number(o.size) || 256,
        errorCorrectionLevel: o.ec || "M",
        margin: 2
      });
      return { html: `<img src="${dataUrl}" alt="\u4E8C\u7EF4\u7801" style="max-width:100%;image-rendering:pixelated;" /><br/><a href="${dataUrl}" download="qrcode.png" style="font-size:12px;">\u2B07 \u4E0B\u8F7D PNG</a>` };
    }
  };
  var colorTool = {
    id: "color-rgb",
    group: "color",
    title: "RGB \u989C\u8272\u8F6C\u6362",
    desc: "HEX / RGB / HSL \u4E92\u8F6C + \u989C\u8272\u9884\u89C8",
    sample: "#4A90D9",
    options: [],
    run(input) {
      let r;
      let g;
      let b;
      const hex = input.trim().match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
      const rgb = input.trim().match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
      if (hex) {
        let h5 = hex[1];
        if (h5.length === 3) h5 = [...h5].map((c) => c + c).join("");
        r = parseInt(h5.slice(0, 2), 16);
        g = parseInt(h5.slice(2, 4), 16);
        b = parseInt(h5.slice(4, 6), 16);
      } else if (rgb) {
        [r, g, b] = [1, 2, 3].map((i) => Number(rgb[i]));
        if (r > 255 || g > 255 || b > 255) throw new Error("RGB \u5206\u91CF\u9700\u5728 0~255");
      } else {
        throw new Error("\u652F\u6301 #RGB/#RRGGBB \u6216 rgb(r,g,b)");
      }
      const rn = r / 255;
      const gn = g / 255;
      const bn = b / 255;
      const max = Math.max(rn, gn, bn);
      const min = Math.min(rn, gn, bn);
      const l = (max + min) / 2;
      let h4 = 0;
      let s = 0;
      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === rn) h4 = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
        else if (max === gn) h4 = ((bn - rn) / d + 2) / 6;
        else h4 = ((rn - gn) / d + 4) / 6;
      }
      const swatch = (c, label) => `<span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;border:1px solid #8888;background:${c};"></span> ${label}`;
      return {
        html: [
          `${swatch(`rgb(${r},${g},${b})`, "")}`,
          `HEX : #${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase()}`,
          `RGB : rgb(${r}, ${g}, ${b})`,
          `HSL : hsl(${Math.round(h4 * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`,
          `\u4EAE\u5EA6: ${(0.299 * r + 0.587 * g + 0.114 * b).toFixed(0)} / 255`
        ].join("\n")
      };
    }
  };
  var pickerTool = {
    id: "color-picker",
    group: "color",
    title: "\u5C4F\u5E55\u53D6\u8272\u5668",
    desc: "EyeDropper API \u4ECE\u5C4F\u5E55\u4EFB\u610F\u4F4D\u7F6E\u53D6\u8272\uFF08Chrome/Edge\uFF09",
    sample: "",
    options: [],
    custom: "color-picker",
    run() {
      return "";
    }
  };
  var keyTestTool = {
    id: "device-keyboard",
    group: "device",
    title: "\u952E\u76D8\u6309\u952E\u6D4B\u8BD5",
    desc: "\u6309\u952E\u663E\u793A key / code / keyCode / \u4FEE\u9970\u952E",
    sample: "",
    custom: "keyboard",
    options: [],
    run() {
      return "";
    }
  };
  var mouseTestTool = {
    id: "device-mouse",
    group: "device",
    title: "\u9F20\u6807\u6309\u952E\u6D4B\u8BD5",
    desc: "\u5728\u6B64\u533A\u57DF\u70B9\u51FB/\u53F3\u952E/\u4E2D\u952E\uFF0C\u663E\u793A\u6309\u952E\u4FE1\u606F",
    sample: "",
    custom: "mouse",
    options: [],
    run() {
      return "";
    }
  };
  var htmlEscapeTool = {
    id: "html-escape",
    group: "html",
    title: "HTML \u8F6C\u4E49\u5B57\u7B26",
    desc: "HTML \u5B9E\u4F53\u8F6C\u4E49\u4E0E\u8FD8\u539F\uFF08\u542B\u547D\u540D\u5B9E\u4F53\u5BF9\u7167\uFF09",
    sample: '<div class="a">Tom & Jerry</div>',
    options: [
      actionOption("escape", [
        { value: "escape", label: "\u8F6C\u4E49" },
        { value: "unescape", label: "\u8FD8\u539F" }
      ])
    ],
    run(input, o) {
      if (o.action === "escape") {
        return input.replace(/[&<>"'\u00a0]/g, (c) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "\xA0": "&nbsp;"
        })[c]);
      }
      const NAMED = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        nbsp: "\xA0",
        copy: "\xA9",
        reg: "\xAE",
        trade: "\u2122",
        hellip: "\u2026",
        mdash: "\u2014",
        ndash: "\u2013",
        lsquo: "\u2018",
        rsquo: "\u2019",
        ldquo: "\u201C",
        rdquo: "\u201D",
        times: "\xD7",
        divide: "\xF7",
        deg: "\xB0",
        plusmn: "\xB1",
        sup2: "\xB2",
        sup3: "\xB3",
        frac12: "\xBD",
        frac14: "\xBC",
        middot: "\xB7",
        sect: "\xA7",
        para: "\xB6",
        bull: "\u2022",
        dagger: "\u2020",
        permil: "\u2030",
        euro: "\u20AC",
        pound: "\xA3",
        yen: "\xA5",
        cent: "\xA2",
        laquo: "\xAB",
        raquo: "\xBB"
      };
      return input.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (m, body) => {
        if (body[0] === "#") {
          const code = body[1] === "x" || body[1] === "X" ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
          if (Number.isFinite(code) && code >= 0 && code <= 1114111) {
            try {
              return String.fromCodePoint(code);
            } catch {
              return m;
            }
          }
          return m;
        }
        const name = body.toLowerCase();
        return name in NAMED ? NAMED[name] : m;
      });
    }
  };
  var metaTool = {
    id: "html-meta",
    group: "html",
    title: "Meta Tag \u63D0\u53D6",
    desc: "\u63D0\u53D6 HTML \u7684 title / meta / og \u6807\u7B7E",
    sample: '<!DOCTYPE html><html><head><title>\u793A\u4F8B</title><meta name="description" content="\u6D4B\u8BD5\u9875\u9762"><meta property="og:image" content="https://x/a.png"></head><body></body></html>',
    options: [],
    run(input) {
      const doc = new DOMParser().parseFromString(input, "text/html");
      const rows = [];
      if (doc.title) rows.push(`title: ${doc.title}`);
      doc.querySelectorAll("meta").forEach((m) => {
        const name = m.getAttribute("name") || m.getAttribute("property") || m.getAttribute("http-equiv");
        const content = m.getAttribute("content");
        if (name) rows.push(`${name}: ${content ?? ""}`);
      });
      doc.querySelectorAll("link[rel]").forEach((l) => rows.push(`link[${l.getAttribute("rel")}]: ${l.getAttribute("href")}`));
      return rows.join("\n") || "\uFF08\u672A\u627E\u5230 meta \u4FE1\u606F\uFF09";
    }
  };
  var tableTool = {
    id: "html-table",
    group: "html",
    title: "\u6587\u672C\u8F6C HTML \u8868\u683C",
    desc: "TSV/CSV/\u5206\u9694\u6587\u672C \u2192 HTML table\uFF08\u53EF\u76F4\u63A5\u8D34\u5165\u7F51\u9875\uFF09",
    sample: "\u59D3\u540D	\u5E74\u9F84	\u57CE\u5E02\n\u6DF1\u7814\u541B	9	\u676D\u5DDE\nToolbox	1	\u4E91\u7AEF",
    options: [
      { key: "sep", label: "\u5206\u9694\u7B26", type: "segment", default: "tab", options: [
        { value: "tab", label: "Tab" },
        { value: "comma", label: "\u9017\u53F7" },
        { value: "pipe", label: "|" }
      ] },
      { key: "header", label: "\u9996\u884C\u4E3A\u8868\u5934", type: "switch", default: true }
    ],
    run(input, o) {
      const sep = o.sep === "tab" ? "	" : o.sep === "comma" ? "," : "|";
      const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
      const ls = lines(input).filter((l) => l.trim());
      if (!ls.length) throw new Error("\u8BF7\u8F93\u5165\u8868\u683C\u6587\u672C");
      const rows = ls.map((l) => l.split(sep).map((c) => c.trim()));
      const [head, ...body] = o.header ? [rows[0], ...rows.slice(1)] : [null, ...rows];
      let out = "<table>\n";
      if (o.header && head) out += `  <thead><tr>${head.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
`;
      out += "  <tbody>\n";
      for (const r of body) out += `    <tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>
`;
      out += "  </tbody>\n</table>";
      return out;
    }
  };
  var markdownTool = {
    id: "html-markdown",
    group: "html",
    title: "Markdown \u9884\u89C8",
    desc: "Markdown \u2192 HTML\uFF08\u5185\u7F6E\u8F7B\u91CF\u6E32\u67D3\u5668\uFF0C\u8F93\u51FA\u6E90\u7801\uFF09",
    sample: "# \u6807\u9898\n\n- \u5217\u8868\u9879 **\u52A0\u7C97**\n- `\u4EE3\u7801`\n\n[\u94FE\u63A5](https://example.com)",
    options: [],
    run(input) {
      let html = input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/^###### (.*)$/gm, "<h6>$1</h6>").replace(/^##### (.*)$/gm, "<h5>$1</h5>").replace(/^#### (.*)$/gm, "<h4>$1</h4>").replace(/^### (.*)$/gm, "<h3>$1</h3>").replace(/^## (.*)$/gm, "<h2>$1</h2>").replace(/^# (.*)$/gm, "<h1>$1</h1>").replace(/^&gt; (.*)$/gm, "<blockquote>$1</blockquote>").replace(/^\s*[-*] (.*)$/gm, "<li>$1</li>").replace(/^\s*\d+\. (.*)$/gm, "<li>$1</li>").replace(/(<li>[\s\S]*?<\/li>)(?!\s*<li>)/g, "<ul>$1</ul>").replace(/^---$/gm, "<hr/>").replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>').replace(/\n{2,}/g, "\n<p/>\n");
      html = html.split("\n").map((l) => l.startsWith("<") ? l : l + "<br/>").join("\n");
      return html;
    }
  };
  var refTableTool = {
    id: "ref-tables",
    group: "html",
    title: "HTTP / ASCII \u901F\u67E5\u8868",
    desc: "HTTP \u72B6\u6001\u7801\u3001\u8BF7\u6C42\u65B9\u6CD5\u3001MIME \u5E38\u7528\u9879\u4E0E ASCII \u5BF9\u7167",
    sample: "",
    options: [
      { key: "table", label: "\u901F\u67E5\u8868", type: "segment", default: "status", options: [
        { value: "status", label: "\u72B6\u6001\u7801" },
        { value: "method", label: "\u8BF7\u6C42\u65B9\u5F0F" },
        { value: "mime", label: "MimeType" },
        { value: "ascii", label: "ASCII" }
      ] }
    ],
    run(_input, o) {
      if (o.table === "status") {
        return [
          "1xx \u4FE1\u606F",
          "  100 Continue  101 Switching Protocols",
          "2xx \u6210\u529F",
          "  200 OK  201 Created  204 No Content  206 Partial Content",
          "3xx \u91CD\u5B9A\u5411",
          "  301 Moved Permanently  302 Found  304 Not Modified  307/308 \u4E34\u65F6/\u6C38\u4E45\u91CD\u5B9A\u5411",
          "4xx \u5BA2\u6237\u7AEF\u9519\u8BEF",
          "  400 Bad Request  401 Unauthorized  403 Forbidden  404 Not Found",
          "  405 Method Not Allowed  409 Conflict  413 Payload Too Large  415 Unsupported Media Type  429 Too Many Requests",
          "5xx \u670D\u52A1\u7AEF\u9519\u8BEF",
          "  500 Internal Server Error  501 Not Implemented  502 Bad Gateway  503 Service Unavailable  504 Gateway Timeout"
        ].join("\n");
      }
      if (o.table === "method") {
        return [
          "GET     \u83B7\u53D6\u8D44\u6E90\uFF08\u5E42\u7B49\uFF0C\u53EF\u7F13\u5B58\uFF09",
          "POST    \u521B\u5EFA/\u63D0\u4EA4\uFF08\u975E\u5E42\u7B49\uFF09",
          "PUT     \u5168\u91CF\u66FF\u6362\uFF08\u5E42\u7B49\uFF09",
          "PATCH   \u90E8\u5206\u66F4\u65B0",
          "DELETE  \u5220\u9664\uFF08\u5E42\u7B49\uFF09",
          "HEAD    \u540C GET \u4F46\u65E0\u54CD\u5E94\u4F53",
          "OPTIONS \u67E5\u8BE2\u652F\u6301\u7684\u65B9\u6CD5\uFF08CORS \u9884\u68C0\uFF09",
          "TRACE   \u56DE\u663E\u8BF7\u6C42\uFF08\u8C03\u8BD5\uFF09",
          "CONNECT \u96A7\u9053\uFF08HTTPS \u4EE3\u7406\uFF09"
        ].join("\n");
      }
      if (o.table === "mime") {
        return [
          "text/html         .html   \u7F51\u9875",
          "text/plain        .txt    \u7EAF\u6587\u672C",
          "text/css          .css    \u6837\u5F0F",
          "text/javascript   .js     \u811A\u672C\uFF08\u63A8\u8350\uFF09",
          "application/json  .json   JSON",
          "application/xml   .xml    XML",
          "application/pdf   .pdf    PDF",
          "application/octet-stream  \u672A\u77E5\u4E8C\u8FDB\u5236\uFF08\u4E0B\u8F7D\uFF09",
          "image/png  image/jpeg  image/gif  image/webp  image/svg+xml",
          "multipart/form-data       \u6587\u4EF6\u4E0A\u4F20",
          "application/x-www-form-urlencoded  \u8868\u5355\u9ED8\u8BA4"
        ].join("\n");
      }
      const rows = [];
      for (let i = 32; i < 127; i += 4) {
        rows.push([0, 1, 2, 3].map((k) => {
          const c = i + k;
          if (c > 127) return "";
          const ch = c === 32 ? "SP" : String.fromCharCode(c);
          return `${String(c).padStart(3)} ${ch.padEnd(3)}`;
        }).join("  "));
      }
      return `DEC  CHR      DEC  CHR      DEC  CHR      DEC  CHR
${rows.join("\n")}`;
    }
  };
  var MISC_TOOLS = [
    uuidTool,
    passwordTool,
    randNumTool,
    qrTool,
    colorTool,
    pickerTool,
    keyTestTool,
    mouseTestTool,
    htmlEscapeTool,
    metaTool,
    tableTool,
    markdownTool,
    refTableTool
  ];

  // src/tools/legacy.js
  var import_js_beautify = __toESM(require_js(), 1);
  var import_js_beautify2 = __toESM(require_js(), 1);
  var import_js_beautify3 = { default: import_js_beautify.default };
  var INDENTS = {
    "2": "  ",
    "4": "    ",
    tab: "	"
  };
  function indentUnit(opt) {
    return INDENTS[opt.indent] || INDENTS["2"];
  }
  function parseJsonOrThrow(text) {
    try {
      return JSON.parse(text);
    } catch (e) {
      throw new Error(`JSON \u89E3\u6790\u5931\u8D25\uFF1A${e.message}`);
    }
  }
  function stringify(value, unit) {
    return JSON.stringify(value, null, unit);
  }
  function pascal(s) {
    return String(s).replace(/[^A-Za-z0-9]+(.)?/g, (_, c) => c ? c.toUpperCase() : "").replace(/^./, (c) => c.toUpperCase()) || "Item";
  }
  function camel(s) {
    const p = pascal(s);
    return p.charAt(0).toLowerCase() + p.slice(1);
  }
  function inferType(value, classes, typeName) {
    if (value === null) return { ts: "unknown", java: "Object", cs: "object", go: "any", swift: "Any?" };
    if (Array.isArray(value)) {
      const el = value.length ? inferType(value[0], classes, typeName) : null;
      return {
        ts: el ? `${el.ts}[]` : "unknown[]",
        java: `List<${el ? el.java : "Object"}>`,
        cs: `List<${el ? el.cs : "object"}>`,
        go: el ? `[]${el.go === "any" ? "interface{}" : el.go}` : "[]interface{}",
        swift: el ? `[${el.swift}]` : "[Any]",
        element: el
      };
    }
    if (typeof value === "object") {
      const name = pascal(typeName);
      if (!classes.some((c) => c.name === name)) {
        const cls = { name, fields: [] };
        classes.push(cls);
        for (const [k, v] of Object.entries(value)) {
          cls.fields.push({ key: k, ...inferType(v, classes, k) });
        }
      }
      return { ts: name, java: name, cs: name, go: name, swift: name, isClass: true, className: name };
    }
    if (typeof value === "number") return { ts: "number", java: "double", cs: "double", go: "float64", swift: "Double" };
    if (typeof value === "boolean") return { ts: "boolean", java: "boolean", cs: "bool", go: "bool", swift: "Bool" };
    return { ts: "string", java: "String", cs: "string", go: "string", swift: "String" };
  }
  function genEntities(root, lang) {
    const classes = [];
    const rootType = inferType(root, classes, "Root");
    const unit = "    ";
    const lines2 = [];
    if (lang === "typescript") {
      const emit = (cls) => {
        lines2.push(`export interface ${cls.name} {`);
        for (const f of cls.fields) lines2.push(`${unit}${f.key}: ${f.ts};`);
        lines2.push("}", "");
      };
      [...classes].reverse().forEach(emit);
      if (rootType.isClass === void 0) {
        lines2.unshift(`// \u6839\u8282\u70B9\u7C7B\u578B\uFF1A${rootType.ts}`);
      }
      return lines2.join("\n").trim() + "\n";
    }
    if (lang === "go") {
      const emit = (cls) => {
        lines2.push(`type ${cls.name} struct {`);
        for (const f of cls.fields) {
          lines2.push(`${unit}${pascal(f.key)} ${f.go} \`json:"${f.key}"\``);
        }
        lines2.push("}", "");
      };
      [...classes].reverse().forEach(emit);
      return lines2.join("\n").trim() + "\n";
    }
    const syntax = {
      java: {
        field: (f) => `${unit}private ${f.java} ${camel(f.key)};`,
        open: (n) => `public class ${n} {`,
        close: "}",
        blank: 1
      },
      csharp: {
        field: (f) => `${unit}public ${f.cs} ${pascal(f.key)} { get; set; }`,
        open: (n) => `public class ${n}`,
        close: "}",
        blank: 1
      },
      swift: {
        field: (f) => `${unit}var ${camel(f.key)}: ${f.swift}`,
        open: (n) => `public struct ${n} {`,
        close: "}",
        blank: 1
      }
    }[lang];
    for (const cls of [...classes].reverse()) {
      lines2.push(syntax.open(cls.name) + (lang === "csharp" ? "" : ""));
      if (lang === "csharp") lines2.push("{");
      for (const f of cls.fields) lines2.push(syntax.field(f));
      lines2.push(syntax.close, "");
    }
    return lines2.join("\n").trimEnd() + "\n";
  }
  var SQL_MAJOR = /* @__PURE__ */ new Set([
    "SELECT",
    "FROM",
    "WHERE",
    "GROUP BY",
    "ORDER BY",
    "HAVING",
    "LIMIT",
    "OFFSET",
    "LEFT JOIN",
    "LEFT OUTER JOIN",
    "RIGHT JOIN",
    "RIGHT OUTER JOIN",
    "FULL JOIN",
    "FULL OUTER JOIN",
    "INNER JOIN",
    "CROSS JOIN",
    "JOIN",
    "UNION",
    "UNION ALL",
    "INSERT INTO",
    "VALUES",
    "UPDATE",
    "SET",
    "DELETE FROM",
    "ON"
  ]);
  function formatSql(text, unit) {
    const src = text.replace(/\r\n/g, " ").replace(/\s+/g, " ").trim();
    if (!src) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
    const tokens = [];
    for (const word of src.split(" ")) {
      let t = word;
      while (t.includes(",")) {
        const i = t.indexOf(",");
        if (i > 0) tokens.push(t.slice(0, i));
        tokens.push(",");
        t = t.slice(i + 1);
      }
      if (t) tokens.push(t);
    }
    const lines2 = [];
    let mode = "normal";
    let contIndent = 0;
    let line = "";
    const flush = () => {
      if (line.trim()) lines2.push(unit.repeat(contIndent) + line.trim());
      line = "";
    };
    for (let i = 0; i < tokens.length; i++) {
      let tok = tokens[i];
      let kw = null;
      const two = `${tok} ${tokens[i + 1] || ""}`.toUpperCase();
      if (SQL_MAJOR.has(two)) {
        kw = two;
        tok = `${tok} ${tokens[++i]}`;
      } else {
        const up = tok.toUpperCase();
        if (SQL_MAJOR.has(up)) kw = up;
      }
      if (kw) {
        flush();
        if (kw === "ON" || kw === "SET") {
          contIndent = 1;
          lines2.push(unit + kw);
          mode = kw === "SET" ? "normal" : "cond";
          continue;
        }
        if (kw === "GROUP BY" || kw === "ORDER BY") {
          contIndent = 0;
          line = kw;
          mode = "normal";
          continue;
        }
        contIndent = 0;
        lines2.push(kw);
        mode = kw === "SELECT" ? "select" : kw === "WHERE" || kw === "HAVING" ? "cond" : "normal";
        contIndent = mode === "normal" ? 0 : 1;
        if (mode === "normal" || kw === "VALUES" || kw.startsWith("UNION")) contIndent = 0;
        continue;
      }
      if (tok === ",") {
        if (mode === "select") {
          flush();
        } else {
          line += ",";
        }
        continue;
      }
      if (mode === "cond" && /^(AND|OR)$/i.test(tok)) {
        flush();
        line = tok.toUpperCase();
        continue;
      }
      line += (line ? " " : "") + tok;
    }
    flush();
    return lines2.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  }
  function formatBraces(text, unit) {
    const src = text.replace(/\r\n/g, "\n");
    const out = [];
    let depth = 0;
    let line = "";
    let inS = false, sCh = "", inComment = false;
    const flush = () => {
      const t = line.trim();
      if (t) out.push(unit.repeat(Math.max(depth, 0)) + t);
      line = "";
    };
    for (let i = 0; i < src.length; i++) {
      const c = src[i], n = src[i + 1];
      if (inComment) {
        if (c === "\n") {
          flush();
          inComment = false;
        } else line += c;
        continue;
      }
      if (inS) {
        line += c;
        if (c === sCh && src[i - 1] !== "\\") inS = false;
        continue;
      }
      if (c === '"' || c === "'" || c === "`") {
        inS = true;
        sCh = c;
        line += c;
        continue;
      }
      if (c === "#") {
        inComment = true;
        line += c;
        continue;
      }
      if (c === "{") {
        line += " {";
        flush();
        depth++;
        continue;
      }
      if (c === "}") {
        flush();
        depth = Math.max(depth - 1, 0);
        out.push(unit.repeat(depth) + "}");
        continue;
      }
      if (c === ";") {
        line += ";";
        flush();
        continue;
      }
      if (c === "\n") {
        flush();
        continue;
      }
      line += c;
    }
    flush();
    return out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  }
  function tidyText(text) {
    const lines2 = text.replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/[ \t]+$/, ""));
    const out = [];
    for (const l of lines2) {
      if (l === "" && out[out.length - 1] === "" && out[out.length - 2] === "") continue;
      out.push(l);
    }
    return out.join("\n").replace(/^\n+/, "").replace(/\n+$/, "\n");
  }
  function extractQuery(text) {
    const s = text.trim();
    const qIdx = s.indexOf("?");
    return qIdx >= 0 ? s.slice(qIdx + 1) : s;
  }
  function parseParams(text) {
    const q = extractQuery(text).split("#")[0];
    const pairs = [];
    for (const seg of q.split("&")) {
      if (!seg) continue;
      const eq = seg.indexOf("=");
      const k = eq >= 0 ? seg.slice(0, eq) : seg;
      const v = eq >= 0 ? seg.slice(eq + 1) : "";
      let dk, dv;
      try {
        dk = decodeURIComponent(k.replace(/\+/g, " "));
      } catch {
        dk = k;
      }
      try {
        dv = decodeURIComponent(v.replace(/\+/g, " "));
      } catch {
        dv = v;
      }
      pairs.push([dk, dv]);
    }
    return pairs;
  }
  function typedValue(v) {
    if (v === "true") return true;
    if (v === "false") return false;
    if (v === "null") return null;
    if (v !== "" && !Number.isNaN(Number(v))) return Number(v);
    return v;
  }
  var indentOption = {
    key: "indent",
    label: "\u7F29\u8FDB",
    type: "segment",
    default: "2",
    options: [
      { value: "2", label: "2 \u7A7A\u683C" },
      { value: "4", label: "4 \u7A7A\u683C" },
      { value: "tab", label: "Tab" }
    ]
  };
  function actionOption2(def, pairs) {
    return { key: "action", label: "\u64CD\u4F5C", type: "segment", default: def, options: pairs };
  }
  function sampleJson() {
    return '{"name":"\u6DF1\u7814\u541B","vip":true,"level":9,"balance":128.5,"tags":["dev","tools"],"address":{"city":"Hangzhou","zip":"310000"},"note":null}';
  }
  var SAMPLE_JS = "function greet(n){const msg=`hello, ${n}`;if(!n){return null}return {msg,at:Date.now()}}";
  var SAMPLE_CSS = ":root{--fg:#333}.card{padding:16px;border:1px solid #eee;border-radius:8px}.card:hover{box-shadow:0 2px 8px rgba(0,0,0,.08)}";
  var SAMPLE_HTML = '<!DOCTYPE html><html><head><title>demo</title></head><body><div class="card"><h1>Hi</h1><p>toolbox</p></div></body></html>';
  var SAMPLE_XML = '<root><user id="1"><name>Alice</name><tags><t>dev</t><t>qa</t></tags></user></root>';
  var SAMPLE_SQL = 'select u.id,u.name,count(o.id) as cnt from users u left join orders o on o.user_id=u.id where u.status=1 and u.created_at>"2024-01-01" group by u.id,u.name having count(o.id)>3 order by cnt desc limit 20';
  var SAMPLE_C = 'int main(int argc,char**argv){for(int i=0;i<argc;i++){printf("%s\\n",argv[i]);}return 0;}';
  var SAMPLE_JAVA = "public class Demo{private String name;public String getName(){return name;}public void setName(String n){this.name=n;}}";
  var SAMPLE_CS = "public class Demo{public int Id{get;set;}public string Name{get;set;}}";
  var SAMPLE_PHP = '<?php function hello($n){if(!$n){return null;}return "hello ".$n;}';
  var SAMPLE_NGINX = "server{listen 80;server_name example.com;location /{proxy_pass http://127.0.0.1:3000;proxy_set_header Host $host;}}";
  var SAMPLE_YAML = "name: toolbox\nitems:\n- id: 1\n  name: json\n- id: 2\n  name:  url   \n";
  var SAMPLE_PY = 'def main():\n    items=[1,2,3]\n    for i in items:   \n        print(i)\n\n\n\nif __name__=="__main__":\n    main()';
  function beautifyTool(id, title, lang, sample, opts = {}) {
    return {
      id,
      group: "format",
      title,
      desc: opts.desc || `${title}\uFF0C\u57FA\u4E8E js-beautify\uFF0C\u672C\u5730\u6267\u884C`,
      sample,
      options: [indentOption],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        const bo = { indent_size: o.indent === "tab" ? 1 : Number(o.indent), indent_char: o.indent === "tab" ? "	" : " " };
        if (lang === "json") {
          return stringify(parseJsonOrThrow(input), indentUnit(o));
        }
        if (lang === "html" || lang === "xml") return import_js_beautify3.default.html(input, { ...bo, wrap_line_length: 0 });
        if (lang === "css") return import_js_beautify3.default.css(input, bo);
        return import_js_beautify3.default.js(input, { ...bo, brace_style: "collapse" });
      }
    };
  }
  function makeUrlJsonTool(id, title, group, defaultAction) {
    return {
      id,
      group,
      title,
      desc: "JSON \u5BF9\u8C61\u4E0E URL \u67E5\u8BE2\u53C2\u6570\u53CC\u5411\u8F6C\u6362",
      sample: sampleJson(),
      options: [
        actionOption2(defaultAction, [
          { value: "toUrl", label: "JSON \u2192 \u53C2\u6570" },
          { value: "toJson", label: "\u53C2\u6570 \u2192 JSON" }
        ]),
        { key: "typed", label: "\u503C\u7C7B\u578B\u63A8\u65AD", type: "switch", default: false },
        indentOption
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        if (o.action === "toUrl") {
          const data = parseJsonOrThrow(input);
          if (typeof data !== "object" || data === null || Array.isArray(data)) throw new Error("\u6839\u8282\u70B9\u9700\u8981\u662F JSON \u5BF9\u8C61");
          const sp = new URLSearchParams();
          for (const [k, v] of Object.entries(data)) {
            sp.append(k, typeof v === "object" ? JSON.stringify(v) : String(v));
          }
          return decodeURIComponent(sp.toString()).replace(/&/g, "\n");
        }
        const pairs = parseParams(input);
        if (!pairs.length) throw new Error("\u672A\u89E3\u6790\u5230\u67E5\u8BE2\u53C2\u6570");
        const obj = {};
        for (const [k, v] of pairs) obj[k] = o.typed ? typedValue(v) : v;
        return stringify(obj, indentUnit(o));
      }
    };
  }
  var TOOLS = [
    // ---- JSON 组 ----
    {
      id: "json-format",
      group: "json",
      title: "JSON \u683C\u5F0F\u5316",
      desc: "\u6821\u9A8C\u5E76\u683C\u5F0F\u5316 / \u538B\u7F29 JSON",
      sample: sampleJson(),
      options: [
        actionOption2("pretty", [
          { value: "pretty", label: "\u683C\u5F0F\u5316" },
          { value: "minify", label: "\u538B\u7F29" }
        ]),
        indentOption
      ],
      run(input, o) {
        const data = parseJsonOrThrow(input);
        return o.action === "minify" ? JSON.stringify(data) : stringify(data, indentUnit(o));
      }
    },
    {
      id: "json-escape",
      group: "json",
      title: "JSON \u8F6C\u4E49",
      desc: "JSON \u6587\u672C\u4E0E\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u4E92\u8F6C\uFF08\u5D4C\u5165\u4EE3\u7801\u7528\uFF09",
      sample: sampleJson(),
      options: [
        actionOption2("escape", [
          { value: "escape", label: "\u8F6C\u4E49" },
          { value: "unescape", label: "\u53BB\u8F6C\u4E49" }
        ])
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        if (o.action === "escape") return JSON.stringify(input);
        let s = input.trim();
        if (!s.startsWith('"')) s = `"${s.replace(/\\"/g, '"').replace(/^"/, "").replace(/"$/, "")}"`;
        try {
          const v = JSON.parse(s);
          if (typeof v !== "string") throw new Error("\u7ED3\u679C\u4E0D\u662F\u5B57\u7B26\u4E32");
          return v;
        } catch (e) {
          throw new Error(`\u53BB\u8F6C\u4E49\u5931\u8D25\uFF1A${e.message}`);
        }
      }
    },
    makeUrlJsonTool("json-url", "JSON \u4E0E URL \u53C2\u6570 \u4E92\u8F6C", "json", "toUrl"),
    {
      id: "json-entity",
      group: "json",
      title: "JSON \u751F\u6210\u5B9E\u4F53\u7C7B",
      desc: "\u6839\u636E JSON \u63A8\u65AD\u7C7B\u578B\uFF0C\u751F\u6210\u5B9E\u4F53/\u7ED3\u6784\u4F53\u5B9A\u4E49",
      sample: sampleJson(),
      options: [
        {
          key: "lang",
          label: "\u76EE\u6807\u8BED\u8A00",
          type: "segment",
          default: "typescript",
          options: [
            { value: "typescript", label: "TS" },
            { value: "java", label: "Java" },
            { value: "csharp", label: "C#" },
            { value: "go", label: "Go" },
            { value: "swift", label: "Swift" }
          ]
        }
      ],
      run(input, o) {
        return genEntities(parseJsonOrThrow(input), o.lang);
      }
    },
    // ---- 格式化组 ----
    beautifyTool("fmt-html", "HTML \u683C\u5F0F\u5316", "html", SAMPLE_HTML),
    beautifyTool("fmt-javascript", "JavaScript \u683C\u5F0F\u5316", "js", SAMPLE_JS),
    beautifyTool("fmt-css", "CSS \u683C\u5F0F\u5316", "css", SAMPLE_CSS),
    beautifyTool("fmt-json", "JSON \u683C\u5F0F\u5316", "json", sampleJson(), { desc: "\u540C\u300CJSON \u7EC4\u300D\u7684\u683C\u5F0F\u5316\uFF0C\u72EC\u7ACB\u5165\u53E3" }),
    beautifyTool("fmt-xml", "XML \u683C\u5F0F\u5316", "xml", SAMPLE_XML, { desc: "XML/\u7C7B HTML \u6807\u8BB0\u683C\u5F0F\u5316\uFF08js-beautify html \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-c", "C \u683C\u5F0F\u5316", "js", SAMPLE_C, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-cpp", "C++ \u683C\u5F0F\u5316", "js", SAMPLE_C, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-csharp", "C# \u683C\u5F0F\u5316", "js", SAMPLE_CS, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-java", "Java \u683C\u5F0F\u5316", "js", SAMPLE_JAVA, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-php", "PHP \u683C\u5F0F\u5316", "js", SAMPLE_PHP, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    {
      id: "fmt-sql",
      group: "format",
      title: "SQL \u683C\u5F0F\u5316",
      desc: "\u8F7B\u91CF SQL \u6392\u7248\uFF1A\u4E3B\u8981\u5173\u952E\u5B57\u72EC\u5360\u4E00\u884C\u3001\u5B50\u53E5\u7F29\u8FDB",
      sample: SAMPLE_SQL,
      options: [indentOption],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return formatSql(input, indentUnit(o));
      }
    },
    {
      id: "fmt-yaml",
      group: "format",
      title: "Yaml \u683C\u5F0F\u5316",
      desc: "\u5B89\u5168\u6574\u7406\uFF1A\u884C\u5C3E\u7A7A\u767D\u3001\u591A\u4F59\u7A7A\u884C\u5F52\u4E00\uFF08\u4E0D\u6539\u7F29\u8FDB\u8BED\u4E49\uFF09",
      sample: SAMPLE_YAML,
      options: [],
      run(input) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return tidyText(input);
      }
    },
    {
      id: "fmt-python",
      group: "format",
      title: "Python \u683C\u5F0F\u5316",
      desc: "\u5B89\u5168\u6574\u7406\uFF1A\u884C\u5C3E\u7A7A\u767D\u3001\u591A\u4F59\u7A7A\u884C\u5F52\u4E00\uFF08\u4E0D\u6539\u7F29\u8FDB\u8BED\u4E49\uFF09",
      sample: SAMPLE_PY,
      options: [],
      run(input) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return tidyText(input);
      }
    },
    {
      id: "fmt-nginx",
      group: "format",
      title: "Nginx \u683C\u5F0F\u5316",
      desc: "\u6309\u5927\u62EC\u53F7/\u5206\u53F7\u7F29\u8FDB\u6392\u7248 nginx \u914D\u7F6E",
      sample: SAMPLE_NGINX,
      options: [indentOption],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return formatBraces(input, indentUnit(o));
      }
    },
    // ---- URL 组 ----
    {
      id: "url-params",
      group: "url",
      title: "URL \u53C2\u6570\u683C\u5F0F\u5316",
      desc: "\u67E5\u8BE2\u4E32\u9010\u884C\u5BF9\u9F50\u5C55\u793A\uFF0C\u652F\u6301\u76F4\u63A5\u7C98\u8D34\u5B8C\u6574 URL",
      sample: "https://example.com/search?q=dev%20toolbox&size=20&page=1&safe=true",
      options: [],
      run(input) {
        const pairs = parseParams(input);
        if (!pairs.length) throw new Error("\u672A\u89E3\u6790\u5230\u67E5\u8BE2\u53C2\u6570");
        const w = Math.max(...pairs.map(([k]) => k.length));
        return pairs.map(([k, v]) => `${k.padEnd(w)} = ${v}`).join("\n") + "\n";
      }
    },
    makeUrlJsonTool("url-json", "URL \u53C2\u6570\u4E0E JSON \u4E92\u8F6C", "url", "toJson"),
    {
      id: "url-encode",
      group: "url",
      title: "URL \u7F16\u7801/\u89E3\u7801",
      desc: "component\uFF08\u542B & = ? \u7B49\u5168\u90E8\u4FDD\u7559\u5B57\u7B26\uFF09\u4E0E full\uFF08encodeURI\uFF09\u4E24\u79CD\u65B9\u5F0F",
      sample: "https://example.com/search?q=\u5F00\u53D1\u5DE5\u5177\u7BB1&size=20",
      options: [
        actionOption2("encode", [
          { value: "encode", label: "\u7F16\u7801" },
          { value: "decode", label: "\u89E3\u7801" }
        ]),
        {
          key: "method",
          label: "\u65B9\u5F0F",
          type: "segment",
          default: "component",
          options: [
            { value: "component", label: "Component" },
            { value: "uri", label: "Full URI" }
          ]
        }
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        try {
          if (o.action === "encode") return o.method === "component" ? encodeURIComponent(input) : encodeURI(input);
          return o.method === "component" ? decodeURIComponent(input) : decodeURI(input);
        } catch (e) {
          throw new Error(`\u8F6C\u6362\u5931\u8D25\uFF1A${e.message}\uFF08\u53EF\u80FD\u662F\u542B\u6709\u65E0\u6548 % \u5E8F\u5217\uFF09`);
        }
      }
    },
    {
      id: "url-encode-js",
      group: "url",
      title: "URL \u7F16\u7801/\u89E3\u7801(js \u65B9\u5F0F)",
      desc: "\u540C\u65F6\u7ED9\u51FA encodeURIComponent \u4E0E encodeURI \u7ED3\u679C\u5BF9\u7167",
      sample: "https://example.com/search?q=\u5F00\u53D1\u5DE5\u5177\u7BB1&size=20",
      options: [
        actionOption2("encode", [
          { value: "encode", label: "\u7F16\u7801\u5BF9\u7167" },
          { value: "decode", label: "\u89E3\u7801" }
        ])
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        if (o.action === "encode") {
          return [
            "// encodeURIComponent\uFF08\u53C2\u6570\u503C\u7528\u8FD9\u4E2A\uFF09",
            encodeURIComponent(input),
            "",
            "// encodeURI\uFF08\u6574\u6761 URL \u7528\u8FD9\u4E2A\uFF09",
            encodeURI(input)
          ].join("\n");
        }
        try {
          return decodeURIComponent(input);
        } catch {
          try {
            return decodeURI(input);
          } catch (e) {
            throw new Error(`\u89E3\u7801\u5931\u8D25\uFF1A${e.message}`);
          }
        }
      }
    },
    {
      id: "url-batch",
      group: "url",
      title: "URL \u6279\u91CF\u751F\u6210\u5668",
      desc: "\u57FA\u7840 URL + \u6BCF\u884C\u4E00\u4E2A path/\u67E5\u8BE2\u7247\u6BB5\uFF0C\u6279\u91CF\u62FC\u63A5",
      sample: "/api/v1/users\n/api/v1/orders?page=1\n/api/v1/sku/1001",
      options: [
        { key: "base", label: "\u57FA\u7840 URL", type: "text", default: "https://api.example.com", placeholder: "https://\u2026" },
        { key: "query", label: "\u8FFD\u52A0\u516C\u5171\u53C2\u6570", type: "text", default: "", placeholder: "token=abc&from=toolbox" }
      ],
      run(input, o) {
        const base = String(o.base || "").trim().replace(/\/+$/, "");
        if (!input.trim()) throw new Error("\u8BF7\u8F93\u5165 path \u5217\u8868\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09");
        const q = String(o.query || "").trim().replace(/^[?&]+/, "");
        const lines2 = input.replace(/\r\n/g, "\n").split("\n").map((l) => l.trim()).filter(Boolean);
        const out = lines2.map((p) => {
          let url = p.startsWith("http://") || p.startsWith("https://") ? p : base + (p.startsWith("/") ? "" : "/") + p;
          if (q) url += (url.includes("?") ? "&" : "?") + q;
          return url;
        });
        return out.join("\n") + "\n";
      }
    }
  ];
  var LEGACY_TOOLS = TOOLS;

  // src/tools.js
  var GROUPS = [
    { id: "json", label: "JSON", order: 0 },
    { id: "format", label: "\u683C\u5F0F\u5316", order: 1 },
    { id: "url", label: "URL", order: 2 },
    { id: "encode", label: "\u7F16\u7801\u89E3\u7801", order: 3 },
    { id: "hash", label: "\u6458\u8981", order: 4 },
    { id: "crypto", label: "\u52A0\u5BC6", order: 5 },
    { id: "text", label: "\u6587\u672C", order: 6 },
    { id: "num", label: "\u6570\u5B57", order: 7 },
    { id: "time", label: "\u65E5\u671F\u65F6\u95F4", order: 8 },
    { id: "random", label: "\u968F\u673A/\u4E8C\u7EF4\u7801", order: 9 },
    { id: "color", label: "\u989C\u8272", order: 10 },
    { id: "device", label: "\u8BBE\u5907\u6D4B\u8BD5", order: 11 },
    { id: "html", label: "HTML/\u901F\u67E5", order: 12 }
  ];
  var TOOLS2 = [
    ...LEGACY_TOOLS,
    ...ENCODE_TOOLS,
    ...HASH_TOOLS,
    ...CRYPTO_TOOLS,
    ...TEXT_TOOLS,
    ...NUM_TOOLS,
    ...TIME_TOOLS,
    ...MISC_TOOLS
  ];
  function getTool(id) {
    return TOOLS2.find((t) => t.id === id) || TOOLS2[0];
  }

  // src/custom.js
  var import_react = __toESM(__require("react"), 1);
  var h = import_react.default.createElement;
  var boxStyle = {
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 12,
    borderRadius: "var(--dsw-radius-md)",
    border: "1px dashed var(--dsw-alias-border-l1)",
    overflow: "auto"
  };
  function useCopy() {
    const [copied, setCopied] = (0, import_react.useState)("");
    const copy = (0, import_react.useCallback)((text, tag = "\u2713") => {
      navigator.clipboard?.writeText(text).then(() => {
        setCopied(tag);
        setTimeout(() => setCopied(""), 1200);
      }).catch(() => {
      });
    }, []);
    return [copied, copy];
  }
  var btn = {
    border: "1px solid var(--dsw-alias-border-l1)",
    borderRadius: "var(--dsw-radius-md)",
    padding: "5px 12px",
    fontSize: 12,
    cursor: "pointer",
    background: "var(--dsw-alias-bg-layer-1)",
    color: "var(--dsw-alias-label-secondary)"
  };
  var mono = { fontFamily: "var(--dsw-font-mono, monospace)", fontSize: 12, wordBreak: "break-all" };
  function B64Image() {
    const [mode, setMode] = (0, import_react.useState)("toB64");
    const [text, setText] = (0, import_react.useState)("");
    const [info, setInfo] = (0, import_react.useState)("");
    const [copied, copy] = useCopy();
    const onFile = (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (f.size > 3 * 1024 * 1024) {
        setInfo(`\u6587\u4EF6\u8FC7\u5927\uFF08${(f.size / 1024 / 1024).toFixed(1)}MB > 3MB\uFF09\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247`);
        return;
      }
      const r = new FileReader();
      r.onload = () => {
        setText(String(r.result));
        setInfo(`${f.name} \xB7 ${f.type || "\u672A\u77E5\u7C7B\u578B"} \xB7 ${(f.size / 1024).toFixed(1)} KB`);
      };
      r.readAsDataURL(f);
    };
    if (mode === "toB64") {
      return h(
        "div",
        { style: boxStyle },
        h(
          "div",
          { style: { display: "flex", gap: 8, alignItems: "center" } },
          h(
            "label",
            { style: { ...btn, display: "inline-block" } },
            "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
            h("input", { type: "file", accept: "image/*", style: { display: "none" }, onChange: onFile })
          ),
          h("button", { style: btn, disabled: !text, onClick: () => copy(text) }, copied || "\u590D\u5236 Data URL"),
          info && h("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)" } }, info)
        ),
        h("textarea", {
          style: { ...mono, flex: 1, minHeight: 80, resize: "none", padding: 8, borderRadius: "var(--dsw-radius-md)", border: "1px solid var(--dsw-alias-border-l1)", background: "var(--dsw-alias-bg-layer-1)", color: "var(--dsw-alias-label-primary)", outline: "none" },
          value: text,
          readOnly: true,
          placeholder: "Data URL \u5C06\u5728\u8FD9\u91CC\u751F\u6210\u2026"
        }),
        text && h("img", { src: text, alt: "\u9884\u89C8", style: { maxWidth: "100%", maxHeight: 180, borderRadius: 6 } }),
        h("button", { style: { ...btn, alignSelf: "flex-start" }, onClick: () => setMode("toImg") }, "\u53CD\u5411\uFF1ABase64 \u2192 \u56FE\u7247")
      );
    }
    return h(
      "div",
      { style: boxStyle },
      h("div", { style: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)" } }, "\u7C98\u8D34 Data URL \u6216\u7EAF Base64\uFF1A"),
      h("textarea", {
        style: { ...mono, flex: 1, minHeight: 80, resize: "none", padding: 8, borderRadius: "var(--dsw-radius-md)", border: "1px solid var(--dsw-alias-border-l1)", background: "var(--dsw-alias-bg-layer-1)", color: "var(--dsw-alias-label-primary)", outline: "none" },
        value: text,
        spellCheck: false,
        placeholder: "data:image/png;base64,\u2026",
        onChange: (e) => setText(e.target.value)
      }),
      /^data:image\//.test(text.trim()) || /^([A-Za-z0-9+/=\s]{50,})$/.test(text.trim()) ? h("img", {
        src: text.trim().startsWith("data:") ? text.trim() : `data:image/png;base64,${text.trim().replace(/\s+/g, "")}`,
        alt: "\u89E3\u7801\u7ED3\u679C",
        style: { maxWidth: "100%", maxHeight: 260, borderRadius: 6 },
        onError: () => setInfo("\u89E3\u7801\u5931\u8D25\uFF1A\u4E0D\u662F\u6709\u6548\u7684\u56FE\u7247")
      }) : null,
      info && h("div", { style: { fontSize: 12, color: "var(--dsw-alias-state-error-primary)" } }, info),
      h("button", { style: { ...btn, alignSelf: "flex-start" }, onClick: () => {
        setMode("toB64");
        setInfo("");
      } }, "\u53CD\u5411\uFF1A\u56FE\u7247 \u2192 Base64")
    );
  }
  async function hashFile(file) {
    const buf = await file.arrayBuffer();
    const bytes = new Uint8Array(buf);
    const rows = [`\u6587\u4EF6: ${file.name}\uFF08${(file.size / 1024).toFixed(2)} KB\uFF09`];
    const { md5FileBytes: md5FileBytes2 } = await Promise.resolve().then(() => (init_md5(), md5_exports));
    rows.push(`MD5    : ${bytesToHex(md5FileBytes2(bytes))}`);
    for (const algo of ["SHA-1", "SHA-256", "SHA-512"]) {
      const d = new Uint8Array(await crypto.subtle.digest(algo, buf));
      rows.push(`${algo.padEnd(6)}: ${bytesToHex(d)}`);
    }
    let crc = 4294967295;
    for (const b of bytes) {
      crc ^= b;
      for (let k = 0; k < 8; k++) crc = crc & 1 ? crc >>> 1 ^ 3988292384 : crc >>> 1;
    }
    rows.push(`CRC32  : ${((crc ^ 4294967295) >>> 0).toString(16).padStart(8, "0")}`);
    return rows.join("\n");
  }
  function FileHash() {
    const [result, setResult] = (0, import_react.useState)("");
    const [busy, setBusy] = (0, import_react.useState)(false);
    const [copied, copy] = useCopy();
    const onFile = async (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (f.size > 64 * 1024 * 1024) {
        setResult("\u6587\u4EF6\u8D85\u8FC7 64MB\uFF0C\u62D2\u7EDD\u5904\u7406");
        return;
      }
      setBusy(true);
      try {
        setResult(await hashFile(f));
      } catch (err) {
        setResult(`\u5931\u8D25: ${err.message}`);
      }
      setBusy(false);
    };
    return h(
      "div",
      { style: boxStyle },
      h(
        "div",
        { style: { display: "flex", gap: 8, alignItems: "center" } },
        h(
          "label",
          { style: { ...btn, display: "inline-block" } },
          busy ? "\u8BA1\u7B97\u4E2D\u2026" : "\u9009\u62E9\u6587\u4EF6\uFF08\u226464MB\uFF0C\u672C\u5730\u8BA1\u7B97\uFF09",
          h("input", { type: "file", style: { display: "none" }, onChange: onFile, disabled: busy })
        ),
        result && !busy ? h("button", { style: btn, onClick: () => copy(result) }, copied || "\u590D\u5236") : null
      ),
      h("pre", { style: { ...mono, margin: 0, whiteSpace: "pre-wrap" } }, result || "MD5 / SHA-1 / SHA-256 / SHA-512 / CRC32")
    );
  }
  function ColorPicker() {
    const [color, setColor] = (0, import_react.useState)("");
    const [err, setErr] = (0, import_react.useState)("");
    const [copied, copy] = useCopy();
    const pick = async () => {
      setErr("");
      if (!window.EyeDropper) {
        setErr("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 EyeDropper API\uFF08\u9700 Chrome/Edge 95+\uFF09");
        return;
      }
      try {
        const r = await new window.EyeDropper().open();
        setColor(r.sRGBHex);
      } catch {
      }
    };
    return h(
      "div",
      { style: { ...boxStyle, alignItems: "center", justifyContent: "center", gap: 14 } },
      h("button", { style: { ...btn, fontSize: 13, padding: "8px 18px" }, onClick: pick }, "\u{1F3A8} \u4ECE\u5C4F\u5E55\u53D6\u8272"),
      color && h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }, onClick: () => copy(color) },
        h("span", { style: { width: 42, height: 42, borderRadius: 8, background: color, border: "1px solid var(--dsw-alias-border-l2)" } }),
        h("span", { style: { ...mono, fontSize: 14 } }, color)
      ),
      copied && h("span", { style: { fontSize: 12, color: "var(--dsw-alias-state-success-primary)" } }, "\u5DF2\u590D\u5236 \u2713"),
      err && h("span", { style: { fontSize: 12, color: "var(--dsw-alias-state-error-primary)" } }, err)
    );
  }
  function KeyboardTest() {
    const [events, setEvents] = (0, import_react.useState)([]);
    const ref = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      ref.current?.focus();
    }, []);
    const onKey = (e) => {
      if (e.key === "Tab") e.preventDefault();
      const mods = [e.ctrlKey && "Ctrl", e.metaKey && "Meta", e.altKey && "Alt", e.shiftKey && "Shift"].filter(Boolean).join("+");
      setEvents((p) => [{ key: e.key, code: e.code, keyCode: e.keyCode, mods: mods || "\u2014" }, ...p].slice(0, 12));
    };
    return h(
      "div",
      { style: { ...boxStyle, gap: 8 } },
      h("div", {
        ref,
        tabIndex: 0,
        onKeyDown: onKey,
        style: {
          flex: 1,
          minHeight: 90,
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--dsw-radius-md)",
          border: "1px solid var(--dsw-alias-border-l1)",
          background: "var(--dsw-alias-bg-layer-1)",
          color: "var(--dsw-alias-label-tertiary)",
          fontSize: 13,
          textAlign: "center"
        }
      }, "\u70B9\u51FB\u6B64\u5904\u83B7\u5F97\u7126\u70B9\uFF0C\u7136\u540E\u968F\u610F\u6309\u952E\uFF08Tab \u5DF2\u62E6\u622A\uFF09"),
      h(
        "table",
        { style: { fontSize: 12, borderCollapse: "collapse", color: "var(--dsw-alias-label-secondary)" } },
        h("tr", null, ["key", "code", "keyCode", "\u4FEE\u9970\u952E"].map((t) => h("th", { key: t, style: { textAlign: "left", padding: "2px 14px 2px 0" } }, t))),
        events.map((ev, i) => h(
          "tr",
          { key: i },
          h("td", { style: { ...mono, paddingRight: 14 } }, ev.key),
          h("td", { style: { ...mono, paddingRight: 14 } }, ev.code),
          h("td", { style: { ...mono, paddingRight: 14 } }, String(ev.keyCode)),
          h("td", { style: mono }, ev.mods)
        ))
      )
    );
  }
  function MouseTest() {
    const [events, setEvents] = (0, import_react.useState)([]);
    const onDown = (e) => {
      e.preventDefault();
      const names = { 0: "\u5DE6\u952E", 1: "\u4E2D\u952E", 2: "\u53F3\u952E", 3: "\u540E\u9000", 4: "\u524D\u8FDB" };
      setEvents((p) => [`button=${e.button}\uFF08${names[e.button] ?? "\u672A\u77E5"}\uFF09 dbl=${e.detail} @ (${e.clientX}, ${e.clientY})`, ...p].slice(0, 10));
    };
    const onCtx = (e) => e.preventDefault();
    return h(
      "div",
      { style: { ...boxStyle, gap: 8 } },
      h("div", {
        onMouseDown: onDown,
        onContextMenu: onCtx,
        style: {
          flex: 1,
          minHeight: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--dsw-radius-md)",
          border: "1px solid var(--dsw-alias-border-l1)",
          background: "var(--dsw-alias-bg-layer-1)",
          color: "var(--dsw-alias-label-tertiary)",
          fontSize: 13,
          userSelect: "none",
          cursor: "crosshair",
          textAlign: "center"
        }
      }, "\u5728\u6B64\u533A\u57DF\u70B9\u51FB / \u53F3\u952E / \u4E2D\u952E"),
      h("div", { style: { ...mono, whiteSpace: "pre-wrap" } }, events.join("\n") || "\uFF08\u4E8B\u4EF6\u5C06\u663E\u793A\u5728\u8FD9\u91CC\uFF09")
    );
  }
  var CUSTOM_RENDERERS = {
    "b64-image": B64Image,
    "file-hash": FileHash,
    "color-picker": ColorPicker,
    keyboard: KeyboardTest,
    mouse: MouseTest
  };
  function renderCustom(tool) {
    const C = CUSTOM_RENDERERS[tool?.custom];
    return C ? h(C) : null;
  }

  // src/toolbox.js
  var h2 = import_react2.default.createElement;
  var LS_KEY = "dsh-dev-toolbox:active-tool";
  var S = {
    root: { display: "flex", width: "100%", height: "100%", minHeight: 0, overflow: "hidden", fontFamily: "var(--dsw-font-family)" },
    side: {
      width: 208,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      borderRight: "1px solid var(--dsw-alias-border-l1)",
      background: "var(--dsw-alias-bg-layer-1)"
    },
    search: {
      margin: 12,
      padding: "6px 10px",
      borderRadius: "var(--dsw-radius-md)",
      border: "1px solid var(--dsw-alias-border-l1)",
      outline: "none",
      fontSize: 13,
      background: "var(--dsw-alias-bg-base)",
      color: "var(--dsw-alias-label-primary)"
    },
    sideScroll: { flex: 1, overflowY: "auto", minHeight: 0, paddingBottom: 12 },
    groupHeader: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      width: "100%",
      padding: "12px 14px 6px",
      border: "none",
      cursor: "pointer",
      userSelect: "none",
      background: "transparent",
      textAlign: "left"
    },
    groupLabel: {
      fontSize: 11,
      letterSpacing: 1.5,
      color: "var(--dsw-alias-label-tertiary)",
      fontWeight: 700
    },
    groupArrow: {
      fontSize: 10,
      color: "var(--dsw-alias-label-tertiary)",
      width: 10,
      flexShrink: 0
    },
    groupRule: { height: 1, margin: "0 14px", background: "var(--dsw-alias-border-l1)", opacity: 0.5 },
    item: {
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "7px 14px 7px 30px",
      fontSize: 13,
      border: "none",
      cursor: "pointer",
      background: "transparent",
      color: "var(--dsw-alias-label-secondary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    itemActive: { background: "var(--dsw-alias-interactive-bg-active)", color: "var(--dsw-alias-brand-primary)", fontWeight: 600 },
    main: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", minHeight: 0, padding: "14px 16px", gap: 10 },
    title: { fontSize: 16, fontWeight: 700, color: "var(--dsw-alias-label-primary)", margin: 0 },
    desc: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)", margin: 0 },
    optRow: { display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" },
    optLabel: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)", flexShrink: 0 },
    seg: {
      display: "inline-flex",
      borderRadius: 999,
      overflow: "hidden",
      border: "1px solid var(--dsw-alias-border-l1)"
    },
    segBtn: {
      border: "none",
      cursor: "pointer",
      padding: "4px 12px",
      fontSize: 12,
      background: "transparent",
      color: "var(--dsw-alias-label-secondary)"
    },
    segBtnOn: { background: "var(--dsw-alias-interactive-bg-active)", color: "var(--dsw-alias-brand-primary)", fontWeight: 600 },
    textOpt: {
      padding: "4px 10px",
      fontSize: 12,
      borderRadius: "var(--dsw-radius-md)",
      border: "1px solid var(--dsw-alias-border-l1)",
      outline: "none",
      minWidth: 180,
      background: "var(--dsw-alias-bg-base)",
      color: "var(--dsw-alias-label-primary)"
    },
    switchWrap: { display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 12, color: "var(--dsw-alias-label-secondary)" },
    panes: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 10 },
    paneLabel: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)", marginBottom: 4 },
    ta: {
      flex: 1,
      minHeight: 0,
      width: "100%",
      boxSizing: "border-box",
      resize: "none",
      padding: 10,
      fontSize: 12,
      lineHeight: 1.55,
      fontFamily: "var(--dsw-font-mono, monospace)",
      borderRadius: "var(--dsw-radius-md)",
      border: "1px solid var(--dsw-alias-border-l1)",
      background: "var(--dsw-alias-bg-layer-1)",
      color: "var(--dsw-alias-label-primary)",
      outline: "none"
    },
    btnBar: { display: "flex", gap: 8, alignItems: "center", flexShrink: 0 },
    btn: {
      border: "1px solid var(--dsw-alias-border-l1)",
      borderRadius: "var(--dsw-radius-md)",
      padding: "5px 12px",
      fontSize: 12,
      cursor: "pointer",
      background: "var(--dsw-alias-bg-layer-1)",
      color: "var(--dsw-alias-label-secondary)"
    },
    btnPrimary: {
      border: "none",
      borderRadius: "var(--dsw-radius-md)",
      padding: "5px 14px",
      fontSize: 12,
      cursor: "pointer",
      background: "var(--dsw-alias-button-primary-fill)",
      color: "#fff",
      fontWeight: 600
    },
    err: { fontSize: 12, color: "var(--dsw-alias-state-error-primary)", flexShrink: 0 },
    empty: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--dsw-alias-label-dimmed)",
      fontSize: 13
    }
  };
  function segOn(on) {
    return { ...S.segBtn, ...on ? S.segBtnOn : null };
  }
  function Segment({ label, value, options, onChange }) {
    return h2(
      "div",
      { style: { display: "inline-flex", alignItems: "center", gap: 6 } },
      h2("span", { style: S.optLabel }, label),
      h2(
        "div",
        { style: S.seg },
        options.map((o) => h2("button", {
          key: o.value,
          style: segOn(value === o.value),
          title: o.label,
          onClick: () => onChange(o.value)
        }, o.label))
      )
    );
  }
  function TextOption({ label, value, placeholder, onChange }) {
    return h2(
      "div",
      { style: { display: "inline-flex", alignItems: "center", gap: 6 } },
      h2("span", { style: S.optLabel }, label),
      h2("input", { style: S.textOpt, value, placeholder, onChange: (e) => onChange(e.target.value) })
    );
  }
  function SwitchOption({ label, value, onChange }) {
    return h2(
      "label",
      { style: S.switchWrap, onClick: () => onChange(!value) },
      h2(
        "span",
        {
          style: {
            width: 30,
            height: 17,
            borderRadius: 999,
            position: "relative",
            flexShrink: 0,
            background: value ? "var(--dsw-alias-brand-primary)" : "var(--dsw-alias-border-l2)",
            transition: "background .15s"
          }
        },
        h2("span", {
          style: {
            position: "absolute",
            top: 2,
            left: value ? 15 : 2,
            width: 13,
            height: 13,
            borderRadius: "50%",
            background: "#fff",
            transition: "left .15s"
          }
        })
      ),
      label
    );
  }
  function defaultOpts(tool) {
    const o = {};
    for (const op of tool.options || []) o[op.key] = op.default;
    return o;
  }
  function ToolboxApp() {
    const [activeId, setActiveId] = (0, import_react2.useState)(() => {
      try {
        return localStorage.getItem(LS_KEY) || TOOLS2[0].id;
      } catch {
        return TOOLS2[0].id;
      }
    });
    const [query, setQuery] = (0, import_react2.useState)("");
    const tool = (0, import_react2.useMemo)(() => getTool(activeId), [activeId]);
    const [input, setInput] = (0, import_react2.useState)("");
    const [opts, setOpts] = (0, import_react2.useState)(() => defaultOpts(getTool(activeId)));
    const [output, setOutput] = (0, import_react2.useState)("");
    const [htmlOut, setHtmlOut] = (0, import_react2.useState)("");
    const [error, setError] = (0, import_react2.useState)("");
    const [copied, setCopied] = (0, import_react2.useState)(false);
    const [collapsed, setCollapsed] = (0, import_react2.useState)(() => {
      try {
        const saved = localStorage.getItem("dsh-toolbox-collapsed");
        if (saved !== null) return JSON.parse(saved);
      } catch {
      }
      return GROUPS.map((g) => g.id);
    });
    const toggleGroup = (0, import_react2.useCallback)((gid) => {
      setCollapsed((prev) => {
        const next = prev.includes(gid) ? prev.filter((x) => x !== gid) : [...prev, gid];
        try {
          localStorage.setItem("dsh-toolbox-collapsed", JSON.stringify(next));
        } catch {
        }
        return next;
      });
    }, []);
    const selectTool = (0, import_react2.useCallback)((t) => {
      setActiveId(t.id);
      setCollapsed((prev) => {
        if (!prev.includes(t.group)) return prev;
        const next = prev.filter((x) => x !== t.group);
        try {
          localStorage.setItem("dsh-toolbox-collapsed", JSON.stringify(next));
        } catch {
        }
        return next;
      });
    }, []);
    const runTimer = (0, import_react2.useRef)(0);
    const runToken = (0, import_react2.useRef)(0);
    (0, import_react2.useEffect)(() => {
      setOpts(defaultOpts(tool));
      setOutput("");
      setHtmlOut("");
      setError("");
      setCopied(false);
      try {
        localStorage.setItem(LS_KEY, tool.id);
      } catch {
      }
    }, [tool]);
    const doRun = (0, import_react2.useCallback)((text, o) => {
      const token = ++runToken.current;
      if (!text.trim() && !tool.custom) {
        setOutput("");
        setHtmlOut("");
        setError("");
        return;
      }
      try {
        const r = tool.run(text, o);
        if (r && typeof r.then === "function") {
          r.then((res) => {
            if (token !== runToken.current) return;
            if (res && typeof res === "object" && "html" in res) {
              setHtmlOut(String(res.html));
              setOutput("");
              setError("");
            } else {
              setOutput(String(res));
              setHtmlOut("");
              setError("");
            }
          }).catch((e) => {
            if (token !== runToken.current) return;
            setOutput("");
            setHtmlOut("");
            setError(e && e.message ? e.message : String(e));
          });
        } else if (r && typeof r === "object" && "html" in r) {
          setHtmlOut(String(r.html));
          setOutput("");
          setError("");
        } else {
          setOutput(String(r));
          setHtmlOut("");
          setError("");
        }
      } catch (e) {
        setOutput("");
        setHtmlOut("");
        setError(e && e.message ? e.message : String(e));
      }
    }, [tool]);
    (0, import_react2.useEffect)(() => {
      clearTimeout(runTimer.current);
      runTimer.current = setTimeout(() => doRun(input, opts), 300);
      return () => clearTimeout(runTimer.current);
    }, [input, opts, doRun]);
    const copyOut = (0, import_react2.useCallback)(() => {
      if (!output) return;
      navigator.clipboard?.writeText(output).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }).catch(() => {
      });
    }, [output]);
    const filtered = (0, import_react2.useMemo)(() => {
      const q = query.trim().toLowerCase();
      return GROUPS.map((g) => ({
        ...g,
        tools: TOOLS2.filter((t) => t.group === g.id && (!q || t.title.toLowerCase().includes(q) || t.id.includes(q)))
      })).filter((g) => g.tools.length);
    }, [query]);
    const hasActionButtons = (tool.options || []).some((o) => o.type === "segment" && o.key === "action");
    return h2(
      "div",
      { style: S.root },
      // 左侧工具列表
      h2(
        "div",
        { style: S.side },
        h2("input", {
          style: S.search,
          placeholder: "\u641C\u7D22\u5DE5\u5177\u2026",
          value: query,
          onChange: (e) => setQuery(e.target.value)
        }),
        h2(
          "div",
          { style: S.sideScroll },
          filtered.map((g) => {
            const isCollapsed = !query.trim() && collapsed.includes(g.id);
            return h2(
              "div",
              { key: g.id },
              h2(
                "button",
                {
                  style: S.groupHeader,
                  title: isCollapsed ? "\u5C55\u5F00\u5206\u7EC4" : "\u6298\u53E0\u5206\u7EC4",
                  onClick: () => toggleGroup(g.id)
                },
                h2("span", { style: S.groupArrow }, isCollapsed ? "\u25B8" : "\u25BE"),
                h2("span", { style: S.groupLabel }, g.label)
              ),
              !isCollapsed && h2("div", { style: S.groupRule }),
              !isCollapsed && g.tools.map((t) => h2("button", {
                key: t.id,
                style: { ...S.item, ...t.id === activeId ? S.itemActive : null },
                title: t.desc,
                onClick: () => selectTool(t)
              }, t.title))
            );
          }),
          !filtered.length && h2("div", { style: { ...S.groupLabel, paddingTop: 16 } }, "\u6CA1\u6709\u5339\u914D\u7684\u5DE5\u5177")
        )
      ),
      // 右侧工作区
      h2(
        "div",
        { style: S.main },
        h2("h3", { style: S.title }, tool.title),
        h2("p", { style: S.desc }, tool.desc),
        (tool.options || []).length > 0 && h2(
          "div",
          { style: S.optRow },
          tool.options.map((op) => {
            if (op.type === "segment") {
              return h2(Segment, {
                key: op.key,
                label: op.label,
                options: op.options,
                value: opts[op.key],
                onChange: (v) => setOpts((p) => ({ ...p, [op.key]: v }))
              });
            }
            if (op.type === "switch") {
              return h2(SwitchOption, {
                key: op.key,
                label: op.label,
                value: !!opts[op.key],
                onChange: (v) => setOpts((p) => ({ ...p, [op.key]: v }))
              });
            }
            if (op.type === "text") {
              return h2(TextOption, {
                key: op.key,
                label: op.label,
                value: String(opts[op.key] ?? ""),
                placeholder: op.placeholder || "",
                onChange: (v) => setOpts((p) => ({ ...p, [op.key]: v }))
              });
            }
            return null;
          })
        ),
        h2(
          "div",
          { style: S.panes },
          tool.custom ? renderCustom(tool) : h2(
            "div",
            { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" } },
            h2("div", { style: S.paneLabel }, "\u8F93\u5165"),
            h2("textarea", {
              style: S.ta,
              value: input,
              spellCheck: false,
              placeholder: `\u8F93\u5165 ${tool.title} \u5185\u5BB9\uFF0C\u6216\u70B9\u51FB\u300C\u793A\u4F8B\u300D\u586B\u5145\u2026`,
              onChange: (e) => setInput(e.target.value)
            })
          ),
          h2(
            "div",
            { style: S.btnBar },
            !tool.custom && h2("button", {
              style: S.btn,
              onClick: () => {
                setInput(tool.sample || "");
                setCopied(false);
              }
            }, "\u793A\u4F8B"),
            !tool.custom && h2("button", { style: S.btn, onClick: () => {
              setInput("");
              setOutput("");
              setHtmlOut("");
              setError("");
            } }, "\u6E05\u7A7A"),
            h2("div", { style: { flex: 1 } }),
            hasActionButtons || tool.custom ? null : h2("button", { style: S.btnPrimary, onClick: () => doRun(input, opts) }, "\u6267\u884C"),
            !tool.custom && h2(
              "button",
              { style: { ...S.btn, ...copied ? { color: "var(--dsw-alias-state-success-primary)" } : null }, onClick: copyOut, disabled: !output },
              copied ? "\u5DF2\u590D\u5236 \u2713" : "\u590D\u5236\u7ED3\u679C"
            )
          ),
          h2(
            "div",
            { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" } },
            h2("div", { style: S.paneLabel }, "\u8F93\u51FA"),
            htmlOut ? h2("div", {
              style: { ...S.ta, overflow: "auto" },
              dangerouslySetInnerHTML: { __html: htmlOut }
            }) : h2("textarea", { style: { ...S.ta, background: "var(--dsw-alias-bg-base)" }, value: output, readOnly: true, spellCheck: false, placeholder: "\u7ED3\u679C\u5C06\u5728\u8FD9\u91CC\u81EA\u52A8\u751F\u6210\u2026" })
          )
        ),
        error && h2("div", { style: S.err }, `\u26A0 ${error}`)
      )
    );
  }

  // src/client.js
  var h3 = import_react3.default.createElement;
  var descriptor = {
    id: "dsh-dev-toolbox:main",
    title: "\u5DE5\u5177\u7BB1",
    description: "JSON / \u4EE3\u7801\u683C\u5F0F\u5316 / URL \u5E38\u7528\u5F00\u53D1\u5DE5\u5177\uFF08\u672C\u5730\u6267\u884C\uFF09",
    order: 60,
    single: true,
    icon: (size) => h3(
      "span",
      { style: { fontSize: Math.round(size * 0.86), lineHeight: 1 }, role: "img", "aria-label": "\u5DE5\u5177\u7BB1" },
      "\u{1F9F0}"
    ),
    component() {
      return h3(ToolboxApp);
    }
  };
  var client_default = {
    name: "dsh-dev-toolbox",
    inject: ["betterSidebar"],
    apply(ctx) {
      ctx.effect(() => ctx.betterSidebar.registerTab(descriptor));
    }
  };
  return __toCommonJS(client_exports);
})();

		const plugin = (__dshDevToolboxBundle && __dshDevToolboxBundle.default) ? __dshDevToolboxBundle.default : __dshDevToolboxBundle;
		return plugin;
	},
});
