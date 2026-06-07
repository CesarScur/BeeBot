
/* ============================================================
   LEVELS DATA
   ============================================================ */
const BUILT_IN_LEVELS = [
    {
        id: 1,
        name: "Fase 1 — A Primeira Flor",
        desc: "🌸 Leve a BeeBot até a flor!",
        start: {x:0, y:7, dir:'EAST'},
        target: {x:3, y:7},
        flowers: [],
        obstacles: [],
        collectWord: null,
        starLimits: { three: 3, two: 5 }
    },
    {
        id: 2,
        name: "Fase 2 — Serpentina",
        desc: "🌸 Chega até a flor percorrendo o caminho!",
        start: {x:0, y:7, dir:'EAST'},
        target: {x:3, y:4},
        flowers: [],
        obstacles: [
            {x:4,y:7},{x:4,y:6},{x:4,y:5},{x:3,y:5},{x:2,y:5},{x:1,y:5},{x:1,y:4},{x:1,y:3},{x:2,y:3}
        ],
        collectWord: null,
        starLimits: { three: 13, two: 20 }
    },
    {
        id: 3,
        name: "Fase 3 — Coleta de Flores",
        desc: "🌼 Passe pelas três flores antes de chegar ao destino!",
        start: {x:0, y:7, dir:'EAST'},
        target: {x:7, y:0},
        flowers: [{x:2,y:7},{x:4,y:5},{x:6,y:3}],
        obstacles: [],
        collectWord: null,
        starLimits: { three: 17, two: 26 }
    },
    {
        id: 4,
        name: "Fase 4 — Labirinto",
        desc: "🧱 Desvie dos obstáculos e chegue à flor!",
        start: {x:0, y:7, dir:'EAST'},
        target: {x:7, y:0},
        flowers: [],
        obstacles: [
            {x:2,y:7},{x:2,y:6},{x:2,y:5},{x:2,y:4},
            {x:4,y:4},{x:4,y:3},{x:4,y:2},{x:4,y:1},
            {x:6,y:3},{x:6,y:4},{x:6,y:5},{x:6,y:6},{x:6,y:7}
        ],
        collectWord: null,
        starLimits: { three: 16, two: 24 }
    },
    {
        id: 5,
        name: "Fase 5 — Coleta Perfeita",
        desc: "⭐ Colete todas as flores e chegue ao destino!",
        start: {x:0, y:7, dir:'EAST'},
        target: {x:7, y:7},
        flowers: [{x:1,y:5},{x:3,y:3},{x:5,y:5},{x:7,y:3}],
        obstacles: [{x:2,y:7},{x:4,y:7},{x:6,y:7}],
        collectWord: null,
        starLimits: { three: 24, two: 36 }
    }
];
