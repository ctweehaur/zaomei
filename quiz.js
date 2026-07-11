/**
 * 互动古文教学平台 - 《早梅》客观题数据包
 */

const quizQuestions = [
    {
        id: 1,
        text: "“一树寒梅白玉条”中“白玉条”描写了梅花什么特征？",
        py: "yī shù hán méi bái yù tiáo zhōng bái yù tiáo miáo xiě le méi huā shén me tè zhēng",
        en: "What feature of the plum blossom does 'white jade branches' describe?",
        options: [
            {
                text: "洁白晶莹、花开繁盛",
                py: "jié bái jīng yíng huā kāi fán shèng",
                en: "Pure white and blooming profusely",
                correct: true,
                explanation: "“白玉条”形容梅花如白玉般洁白晶莹，且开满枝条，十分繁盛。",
                explanationPy: "bái yù tiáo xíng róng méi huā rú bái yù bān jié bái jīng yíng qiě kāi mǎn zhī tiáo shí fēn fán shèng",
                explanationEn: "'White jade branches' describes plum blossoms as pure and crystalline as white jade, blooming abundantly on the branches."
            },
            {
                text: "花朵很小，数量稀少",
                py: "huā duǒ hěn xiǎo shù liàng xī shǎo",
                en: "Small flowers, few in number",
                correct: false,
                explanation: "“玉条”指花开满枝，如白玉缀满枝条，是繁盛的景象，并非稀少。",
                explanationPy: "yù tiáo zhǐ huā kāi mǎn zhī rú bái yù zhuì mǎn zhī tiáo shì fán shèng de jǐng xiàng bìng fēi xī shǎo",
                explanationEn: "'Jade branches' suggests flowers covering the branches like white jade, indicating abundance, not scarcity."
            },
            {
                text: "枝条笔直，坚硬如铁",
                py: "zhī tiáo bǐ zhí jiān yìng rú tiě",
                en: "Straight branches, hard as iron",
                correct: false,
                explanation: "“白玉条”描写的是梅花的洁白与晶莹，而非枝条的硬度或形状。",
                explanationPy: "bái yù tiáo miáo xiě de shì méi huā de jié bái yǔ jīng yíng ér fēi zhī tiáo de yìng dù huò xíng zhuàng",
                explanationEn: "'White jade branches' describes the flowers' purity and translucency, not the hardness or shape of the branches."
            },
            {
                text: "花朵凋谢，枝条光秃",
                py: "huā duǒ diāo xiè zhī tiáo guāng tū",
                en: "Wilted flowers, bare branches",
                correct: false,
                explanation: "“白玉条”是花开繁盛的景象，与凋谢光秃相反。",
                explanationPy: "bái yù tiáo shì huā kāi fán shèng de jǐng xiàng yǔ diāo xiè guāng tū xiāng fǎn",
                explanationEn: "'White jade branches' depicts flourishing blooms, the opposite of withering and bareness."
            }
        ]
    },
    {
        id: 2,
        text: "“迥临村路傍溪桥”写出了梅花的生长环境有什么特点？",
        py: "jiǒng lín cūn lù bàng xī qiáo xiě chū le méi huā de shēng zhǎng huán jìng yǒu shén me tè diǎn",
        en: "What does the line about the plum's growth environment convey?",
        options: [
            {
                text: "远离热闹，靠近溪水",
                py: "yuǎn lí rè nào kào jìn xī shuǐ",
                en: "Far from the crowds, near the stream",
                correct: true,
                explanation: "“迥”表示远离，“傍溪桥”表示靠近溪水。梅花生长在偏僻水边，不与他人争艳。",
                explanationPy: "jiǒng biǎo shì yuǎn lí bàng xī qiáo biǎo shì kào jìn xī shuǐ méi huā shēng zhǎng zài piān pì shuǐ biān bù yǔ tā rén zhēng yàn",
                explanationEn: "'迥' means far from, and '傍溪桥' means near the stream. The plum grows in a secluded spot by the water, not competing with others."
            },
            {
                text: "靠近村路，人来人往",
                py: "kào jìn cūn lù rén lái rén wǎng",
                en: "Near the village path, busy with people",
                correct: false,
                explanation: "“迥”是“远”的意思，说明梅花远离村路，而非靠近。",
                explanationPy: "jiǒng shì yuǎn de yì sī shuō míng méi huā yuǎn lí cūn lù ér fēi kào jìn",
                explanationEn: "'迥' means 'far,' indicating the plum is far from the village path, not near it."
            },
            {
                text: "在城市的花园中",
                py: "zài chéng shì de huā yuán zhōng",
                en: "In a city garden",
                correct: false,
                explanation: "诗中写的是“村路”、“溪桥”，是乡村野外之景，非城市花园。",
                explanationPy: "shī zhōng xiě de shì cūn lù xī qiáo shì xiāng cūn yě wài zhī jǐng fēi chéng shì huā yuán",
                explanationEn: "The poem mentions 'village path' and 'stream bridge,' depicting a rural scene, not a city garden."
            },
            {
                text: "在溪水中央，无法靠近",
                py: "zài xī shuǐ zhōng yāng wú fǎ kào jìn",
                en: "In the middle of the stream, inaccessible",
                correct: false,
                explanation: "“傍溪桥”是靠近溪边的桥，并非在水中，且能靠近欣赏。",
                explanationPy: "bàng xī qiáo shì kào jìn xī biān de qiáo bìng fēi zài shuǐ zhōng qiě néng kào jìn xīn shǎng",
                explanationEn: "'傍溪桥' means beside the stream bridge, not in the water, and is accessible for appreciation."
            }
        ]
    },
    {
        id: 3,
        text: "诗人为什么会把梅花看成白雪？",
        py: "shī rén wèi shén me huì bǎ méi huā kàn chéng bái xuě",
        en: "Why did the poet mistake the plum blossoms for snow?",
        options: [
            {
                text: "梅花洁白如雪，诗人没有料到寒冬未过花已早开",
                py: "méi huā jié bái rú xuě shī rén méi yǒu liào dào hán dōng wèi guò huā yǐ zǎo kāi",
                en: "The plum is as white as snow, and the poet didn't expect it to bloom before winter ended",
                correct: true,
                explanation: "梅花盛开时冰雪未融，诗人误以为是尚未融化的冬雪，凸现了早梅的洁白与惊喜。",
                explanationPy: "méi huā shèng kāi shí bīng xuě wèi róng shī rén wù yǐ wéi shì shàng wèi róng huà de dōng xuě tū xiàn le zǎo méi de jié bái yǔ jīng xǐ",
                explanationEn: "The plum blooms before the snow has melted; the poet mistakes it for unmelted winter snow, highlighting the plum's whiteness and the surprise of its early bloom."
            },
            {
                text: "梅花和雪的颜色一样，诗人分不清",
                py: "méi huā hé xuě de yán sè yī yàng shī rén fēn bù qīng",
                en: "Plum and snow are the same color, so the poet couldn't tell them apart",
                correct: false,
                explanation: "诗人并非分不清，而是因为梅花提早开放，远远看去误以为是雪。",
                explanationPy: "shī rén bìng fēi fēn bù qīng ér shì yīn wèi méi huā tí zǎo kāi fàng yuǎn yuǎn kàn qù wù yǐ wéi shì xuě",
                explanationEn: "The poet could tell them apart; it was the early bloom that caused the illusion from a distance."
            },
            {
                text: "梅花是白色的，看起来像雪",
                py: "méi huā shì bái sè de kàn qǐ lái xiàng xuě",
                en: "Plum blossoms are white and look like snow",
                correct: false,
                explanation: "这不是完整原因，还需加上“近水花先发”的提早开放这一前提。",
                explanationPy: "zhè bù shì wán zhěng yuán yīn hái xū jiā shàng jìn shuǐ huā xiān fā de tí zǎo kāi fàng zhè yī qián tí",
                explanationEn: "This is not the complete reason; the premise of 'flowers near water bloom earlier' must also be included."
            },
            {
                text: "梅花是晚上开放的，光线不足",
                py: "méi huā shì wǎn shàng kāi fàng de guāng xiàn bù zú",
                en: "The plum blooms at night with insufficient light",
                correct: false,
                explanation: "诗中并未提及梅花晚上开放或光线不足，此说法无依据。",
                explanationPy: "shī zhōng bìng wèi tí jí méi huā wǎn shàng kāi fàng huò guāng xiàn bù zú cǐ shuō fǎ wú yī jù",
                explanationEn: "The poem doesn't mention night blooming or poor lighting; this is unsupported."
            }
        ]
    },
    {
        id: 4,
        text: "从哪些方面能看出梅花拥有坚毅的品质？",
        py: "cóng nǎ xiē fāng miàn néng kàn chū méi huā yōng yǒu jiān yì de pǐn zhì",
        en: "From what aspects can we see the plum's resilient character?",
        options: [
            {
                text: "寒冬中开放，远离热闹环境",
                py: "hán dōng zhōng kāi fàng yuǎn lí rè nào huán jìng",
                en: "Blooming in the cold winter, far from noisy places",
                correct: true,
                explanation: "梅花不畏严寒，在寒冬中独自开放，且生长在远离热闹的溪桥旁，不与其争艳。",
                explanationPy: "méi huā bù wèi yán hán zài hán dōng zhōng dú zì kāi fàng qiě shēng zhǎng zài yuǎn lí rè nào de xī qiáo páng bù yǔ qí zhēng yàn",
                explanationEn: "The plum is fearless of the cold, blooming alone in winter, and grows far from the crowd by the stream, not competing with others."
            },
            {
                text: "花瓣晶莹剔透，非常美丽",
                py: "huā bàn jīng yíng tī tòu fēi cháng měi lì",
                en: "Its petals are crystalline and beautiful",
                correct: false,
                explanation: "美丽与坚毅无关，此处描述的是梅花的形态而非品格。",
                explanationPy: "měi lì yǔ jiān yì wú guān cǐ chù miáo shù de shì méi huā de xíng tài ér fēi pǐn gé",
                explanationEn: "Beauty is not resilience; this describes the plum's form, not its character."
            },
            {
                text: "梅花比雪更白，更漂亮",
                py: "méi huā bǐ xuě gèng bái gèng piào liang",
                en: "The plum is whiter and more beautiful than snow",
                correct: false,
                explanation: "诗中并未将梅花与雪作比较，而是将梅花误认为雪，表现其洁白。",
                explanationPy: "shī zhōng bìng wèi jiāng méi huā yǔ xuě zuò bǐ jiào ér shì jiāng méi huā wù rèn wéi xuě biǎo xiàn qí jié bái",
                explanationEn: "The poem doesn't compare plum to snow; it mistakes plum for snow to show its whiteness."
            },
            {
                text: "梅花在春天开放，与百花争艳",
                py: "méi huā zài chūn tiān kāi fàng yǔ bǎi huā zhēng yàn",
                en: "The plum blooms in spring, competing with all flowers",
                correct: false,
                explanation: "梅花在寒冬早春开放，并非与百花争艳的季节，且诗中强调其远离热闹。",
                explanationPy: "méi huā zài hán dōng zǎo chūn kāi fàng bìng fēi yǔ bǎi huā zhēng yàn de jì jié qiě shī zhōng qiáng diào qí yuǎn lí rè nào",
                explanationEn: "The plum blooms in cold early spring, not in the season when flowers compete, and the poem emphasizes its seclusion."
            }
        ]
    }
];

console.log("成功加载：quiz 客观题数据包");
