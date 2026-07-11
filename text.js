/**
 * 互动古文教学平台 - 《早梅》原文核心词解数据包
 */

const poemData = [
    // 第一句：一树寒梅白玉条，
    { text: "一树", py: "yī shù", zh: "满树、整棵树。", en: "a whole tree" },
    { text: "寒梅", py: "hán méi", zh: "在寒冷的早春中盛开的梅花。", en: "cold-weather plum / winter plum", exam: true },
    { text: "白玉", py: "bái yù", zh: "白色的玉，形容梅花洁白晶莹、花瓣如白玉般剔透。", en: "white jade", exam: true },
    { text: "条", py: "tiáo", zh: "枝条，这里指梅花开满枝头，像白玉缀满枝条。", en: "branches" },
    { text: "，", punc: true },

    // 第二句：迥临村路傍溪桥。
    { text: "迥", py: "jiǒng", zh: "远、遥远。这里指远离热闹的村路。", en: "far away / remote", exam: true },
    { text: "临", py: "lín", zh: "面对、靠近。", en: "to face / to be near" },
    { text: "村路", py: "cūn lù", zh: "乡村的道路，人来车往之处。", en: "village path / country road" },
    { text: "傍", py: "bàng", zh: "靠近、依傍。", en: "beside / next to" },
    { text: "溪桥", py: "xī qiáo", zh: "溪水上的小桥。", en: "bridge over a stream" },
    { text: "。", punc: true },

    // 第三句：不知近水花先发，
    { text: "不知", py: "bù zhī", zh: "不知道、没有料到。", en: "not knowing / not expecting" },
    { text: "近水", py: "jìn shuǐ", zh: "靠近水边。水边气温较暖，花会先开。", en: "near the water", exam: true },
    { text: "花先发", py: "huā xiān fā", zh: "花先开放、提早开花。", en: "flowers bloom earlier", exam: true },
    { text: "，", punc: true },

    // 第四句：疑是经冬雪未销。
    { text: "疑是", py: "yí shì", zh: "怀疑是、以为是。", en: "suspecting / thinking it is" },
    { text: "经冬", py: "jīng dōng", zh: "经过整个冬天。", en: "through the winter", exam: true },
    { text: "雪", py: "xuě", zh: "雪花、冰雪。", en: "snow" },
    { text: "未销", py: "wèi xiāo", zh: "没有融化。销：通“消”，融化。", en: "not yet melted", exam: true },
    { text: "。", punc: true }
];

console.log("成功加载：text 原文数据包");
