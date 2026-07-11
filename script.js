/**
 * 互动古文教学平台 - 核心交互逻辑
 */

let originalQuizQuestions = [];

// ============================================================
// 核心工具函数
// ============================================================

function alignText(zh, py) {
    if (!zh) return '';
    const chars = zh.trim().split('');
    const pys = py ? py.trim().split(/\s+/) : [];
    let pIdx = 0;
    let html = '';
    
    for (let c of chars) {
        // 阿拉伯数字：不配拼音，但占用字符位置（透明占位）
        if (/[0-9]/.test(c)) {
            html += `<span class="char-box"><span class="py-text" style="visibility: hidden;">&nbsp;</span><span class="punctuation" style="font-weight: 600; color: #1e293b;">${c}</span></span>`;
        }
        // 英文字母（含带变音符号的字母如 é, è, ê, ā, ī, ū 等）：不配拼音，透明占位
        else if (/[a-zA-Z\u00C0-\u024F]/.test(c)) {
            html += `<span class="char-box"><span class="py-text" style="visibility: hidden;">&nbsp;</span><span class="punctuation" style="font-weight: 600; color: #1e293b;">${c}</span></span>`;
        }
        // 标点符号（含中文括号、方括号、中文引号）：不配拼音，透明占位
        else if (/[\.\/\\\,，。？！：“”‘’《》、\-\:；—\s（）\[\]“”]/.test(c)) {
            html += `<span class="char-box"><span class="py-text" style="visibility: hidden;">&nbsp;</span><span class="punctuation">${c}</span></span>`;
        } 
        // 中文汉字：正常配拼音
        else {
            const p = pys[pIdx] || '';
            html += `<span class="char-box"><span class="py-text">${p}</span><span class="zh-text">${c}</span></span>`;
            pIdx++;
        }
    }
    return html;
}

function alignTextWithPrefix(prefix, zh, py) {
    if (!zh) return '';
    const chars = zh.trim().split('');
    const pys = py ? py.trim().split(/\s+/) : [];
    let html = '';
    
    html += `<span class="char-box" style="margin-right: 8px !important;"><span class="py-text">&nbsp;</span><span class="zh-text" style="font-weight: bold; color: #1e293b;">${prefix}</span></span>`;
    
    let pIdx = 0;
    for (let c of chars) {
        // 阿拉伯数字：不配拼音，但占用字符位置（透明占位）
        if (/[0-9]/.test(c)) {
            html += `<span class="char-box"><span class="py-text" style="visibility: hidden;">&nbsp;</span><span class="punctuation" style="font-weight: 600; color: #1e293b;">${c}</span></span>`;
        }
        // 英文字母（含带变音符号的字母如 é, è, ê, ā, ī, ū 等）：不配拼音，透明占位
        else if (/[a-zA-Z\u00C0-\u024F]/.test(c)) {
            html += `<span class="char-box"><span class="py-text" style="visibility: hidden;">&nbsp;</span><span class="punctuation" style="font-weight: 600; color: #1e293b;">${c}</span></span>`;
        }
        // 标点符号（含中文括号、方括号、中文引号）：不配拼音，透明占位
        else if (/[\.\/\\\,，。？！：“”‘’《》、\-\:；—\s（）\[\]“”]/.test(c)) {
            html += `<span class="char-box"><span class="py-text" style="visibility: hidden;">&nbsp;</span><span class="punctuation">${c}</span></span>`;
        } 
        // 中文汉字：正常配拼音
        else {
            const p = pys[pIdx] || '';
            html += `<span class="char-box"><span class="py-text">${p}</span><span class="zh-text">${c}</span></span>`;
            pIdx++;
        }
    }
    return html;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function toggleAnswer(btn) {
    const answerBox = btn.nextElementSibling;
    if (answerBox.style.display === 'block') {
        answerBox.style.display = 'none';
        btn.innerHTML = '📖 点击查看标准答案';
    } else {
        answerBox.style.display = 'block';
        btn.innerHTML = '📖 收起答案';
    }
}

// ============================================================
// 渲染函数
// ============================================================

function renderPoem() {
    const container = document.getElementById('dynamic-poem-container');
    let html = '<div class="poem-paragraph" style="text-align: center !important; padding-left: 0 !important; margin: 0 auto !important; line-height: 2.2 !important;">'; 
    
    poemData.forEach(w => {
        if(w.punc) {
            html += `<span class="punctuation">${w.text.trim()}</span>`;
            // 遇到句号、问号、感叹号换行（逗号、顿号等不换行）
            if (w.text.trim() === '。' || w.text.trim() === '？' || w.text.trim() === '！') {
                html += '</div><div class="poem-paragraph" style="text-align: center !important; padding-left: 0 !important; margin: 0 auto !important; line-height: 2.2 !important;">';
            }
        } else {
            let examClass = w.exam ? ' word exam-focus' : ' word';
            let examAttr = w.exam ? ' data-exam="true"' : '';
            html += `<span class="${examClass}" data-text="${w.text.trim()}" data-pinyin="${w.py}" data-zh="${w.zh}" data-en="${w.en}"${examAttr}>${alignText(w.text, w.py)}</span>`;
        }
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function renderTranslation() {
    const container = document.getElementById('translationContent');
    let html = '';
    translationData.forEach((item, index) => {
        if(index > 0) html += '<div class="trans-divider"></div>';
        html += `
            <div class="trans-text-line">
                <div class="trans-zh">${alignText(item.zh, item.py)}</div>
                <div class="trans-en">${item.en}</div>
            </div>`;
    });
    container.innerHTML = html;
}

function renderAnalysis() {
    const container = document.getElementById('analysis-content');
    let html = '';
    analysisData.forEach(item => {
        html += `
            <div class="analysis-card">
                <div class="ana-title-group">
                    <h4 class="ana-header">${alignText(item.header, item.headerPy)}</h4>
                    <div class="ana-en">${item.en}</div>
                </div>
                <div class="ana-text-group">
                    <p class="ana-zh">${alignText(item.textZh, item.textPy)}</p>
                    <div class="ana-en">${item.textEn}</div>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

function renderShortQ() {
    const container = document.getElementById('shortq-content');
    if (!container) return;
    let html = '';
    shortQData.forEach(item => {
        let strategyZhHtml = '';
        
        item.sZh.forEach((lineText, lineIdx) => {
            if(lineIdx > 0) strategyZhHtml += '<br>';
            const linePy = item.sPy && item.sPy[lineIdx] ? item.sPy[lineIdx] : '';
            strategyZhHtml += `<span class="strategy-step-line">${alignText(lineText, linePy)}</span>`;
        });

        html += `
            <div class="sa-card">
                <div class="sa-q-header">
                    <div class="sa-q-num-box">
                        <span class="sa-q-num">${item.id}</span>
                    </div>
                    <div class="q-text-group">
                        <h4 class="q-zh">${alignText(item.qZh, item.qPy)}</h4>
                    </div>
                </div>
                <div class="q-en">${item.qEn}</div>
                <div class="strategy-box">
                    <div class="strategy-title">💡 答题思路</div>
                    <div class="strategy-zh" style="display: block !important; line-height: 2.6 !important;">${strategyZhHtml}</div>
                    <div class="strategy-en">${item.sEn}</div>
                </div>
                <button class="sa-answer-btn" onclick="toggleAnswer(this)">📖 点击查看标准答案</button>
                <div class="sa-answer-box">
                    <div class="sa-model-answer">
                        <div class="sa-badge">标准答案</div>
                        <div class="sa-zh">${alignText(item.aZh, item.aPy)}</div>
                        <div class="sa-en">${item.aEn}</div>
                    </div>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

function renderQuizCards() {
    const container = document.getElementById('quiz-dynamic-container');
    if (!container || originalQuizQuestions.length === 0) return;
    container.innerHTML = '';
    
    const currentQuestions = JSON.parse(JSON.stringify(originalQuizQuestions));
    
    currentQuestions.forEach(q => {
        shuffleArray(q.options); 
        
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.setAttribute('data-qid', q.id);
        let optionsHtml = '';
        const letters = ['A.', 'B.', 'C.', 'D.'];
        
        q.options.forEach((opt, idx) => {
            const optLetter = letters[idx];
            optionsHtml += `
                <button class="option-btn" data-correct="${opt.correct}" data-explanation-correct="${opt.correct ? opt.explanation : ''}" data-explanation-correct-py="${opt.correct ? opt.explanationPy : ''}" data-explanation-correct-en="${opt.correct ? opt.explanationEn : ''}" data-explanation-wrong="${!opt.correct ? opt.explanation : ''}" data-explanation-wrong-py="${!opt.correct ? opt.explanationPy : ''}" data-explanation-wrong-en="${!opt.correct ? opt.explanationEn : ''}" data-opt-text="${opt.text}" data-opt-py="${opt.py}" data-opt-en="${opt.en}">
                    <div class="opt-zh">
                        ${alignTextWithPrefix(optLetter, opt.text, opt.py)}
                    </div>
                    <div class="quiz-option-en">
                        ${opt.en}
                    </div>
                </button>`;
        });
        
        card.innerHTML = `
            <div class="question-header">
                <div class="q-zh-wrapper">
                    ${alignTextWithPrefix(q.id + '.', q.text, q.py)}
                </div>
                <div class="q-en">
                    ${q.en}
                </div>
            </div>
            <div class="options-area">${optionsHtml}</div>
            <div class="feedback"></div>`;
        container.appendChild(card);
        
        const optsDiv = card.querySelector('.options-area');
        const btns = optsDiv.querySelectorAll('.option-btn');
        const fbDiv = card.querySelector('.feedback');
        btns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (this.disabled) return;
                const isCorrect = this.getAttribute('data-correct') === 'true';
                const correctBtn = Array.from(btns).find(b => b.getAttribute('data-correct') === 'true');
                const correctOptText = correctBtn ? correctBtn.getAttribute('data-opt-text') : '正确选项';
                
                btns.forEach(b => b.disabled = true);
                if (isCorrect) {
                    this.classList.add('correct');
                    const explanation = this.getAttribute('data-explanation-correct');
                    const explanationPy = this.getAttribute('data-explanation-correct-py');
                    const explanationEn = this.getAttribute('data-explanation-correct-en');
                    fbDiv.className = 'feedback success';
                    fbDiv.innerHTML = `
                        <div class="fb-line"><span class="fb-label success-txt">✅ 回答正确！</span></div>
                        <div class="fb-line"><span class="fb-label">📖 正确解析：</span><span class="fb-content">${alignText(explanation, explanationPy)}</span></div>
                        <div class="fb-en">💬 Correct Explanation: ${explanationEn}</div>`;
                } else {
                    this.classList.add('wrong');
                    const wrongExp = this.getAttribute('data-explanation-wrong');
                    const wrongExpPy = this.getAttribute('data-explanation-wrong-py');
                    const wrongExpEn = this.getAttribute('data-explanation-wrong-en');
                    
                    const correctExp = correctBtn ? correctBtn.getAttribute('data-explanation-correct') : "";
                    const correctExpPy = correctBtn ? correctBtn.getAttribute('data-explanation-correct-py') : "";
                    const correctExpEn = correctBtn ? correctBtn.getAttribute('data-explanation-correct-en') : "";
                    
                    fbDiv.className = 'feedback error';
                    fbDiv.innerHTML = `
                        <div class="fb-line"><span class="fb-label error-txt">❌ 回答错误。正确答案是：</span><span class="fb-content-main">${correctOptText}</span></div>
                        <div class="fb-line" style="margin-top: 8px;"><span class="fb-label">📖 你选择的选项分析：</span><span class="fb-content">${alignText(wrongExp, wrongExpPy)}</span></div>
                        <div class="fb-en">💬 Your Choice Analysis: ${wrongExpEn}</div>
                        <div class="fb-line" style="margin-top: 8px;"><span class="fb-label">📖 正确选项解析：</span><span class="fb-content">${alignText(correctExp, correctExpPy)}</span></div>
                        <div class="fb-en">💬 Correct Option Analysis: ${correctExpEn}</div>`;
                }
            });
        });
    });
}

// ============================================================
// 交互初始化
// ============================================================

function initInteractions() {
    // 翻译折叠
    const translationHeader = document.getElementById('translationHeader');
    const translationContent = document.getElementById('translationContent');
    const toggleIcon = document.getElementById('toggleIcon');
    translationHeader.addEventListener('click', function() {
        if (translationContent.classList.contains('show')) {
            translationContent.classList.remove('show');
            toggleIcon.textContent = '▶';
        } else {
            translationContent.classList.add('show');
            toggleIcon.textContent = '▼';
        }
    });
    
    // 拼音/英文开关
    const pinyinToggle = document.getElementById('pinyin-toggle');
    const enToggle = document.getElementById('en-toggle');
    
    document.body.classList.add('hide-pinyin', 'hide-english');
    pinyinToggle.addEventListener('change', function() { 
        if (this.checked) document.body.classList.remove('hide-pinyin'); 
        else document.body.classList.add('hide-pinyin'); 
    });
    enToggle.addEventListener('change', function() { 
        if (this.checked) document.body.classList.remove('hide-english'); 
        else document.body.classList.add('hide-english'); 
    });

    // 词解弹窗
    const words = document.querySelectorAll('.word');
    const tooltip = document.getElementById('tooltip');
    const dispWord = document.getElementById('disp-word');
    const dispPinyin = document.getElementById('disp-pinyin');
    const dispZh = document.getElementById('disp-zh');
    const dispEn = document.getElementById('disp-en');
    const examTag = document.getElementById('exam-tag');
    
    words.forEach(word => {
        word.addEventListener('click', function(e) {
            e.stopPropagation();
            words.forEach(w => w.classList.remove('active'));
            this.classList.add('active');
            
            dispWord.innerText = this.getAttribute('data-text');
            dispPinyin.innerText = this.getAttribute('data-pinyin');
            dispZh.innerHTML = `<strong>解析：</strong> ${this.getAttribute('data-zh')}`;
            dispEn.innerText = this.getAttribute('data-en');
            examTag.style.display = (this.getAttribute('data-exam') === 'true') ? 'inline-block' : 'none';
            
            tooltip.style.display = 'block';
            
            if (window.innerWidth <= 768) {
                tooltip.style.top = '50%';
                tooltip.style.left = '50%';
            } else {
                const rect = this.getBoundingClientRect();
                tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 20}px`;
                tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
            }
            
            setTimeout(() => tooltip.classList.add('show'), 10);
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!tooltip.contains(e.target) && !e.target.closest('.word')) {
            tooltip.classList.remove('show');
            words.forEach(w => w.classList.remove('active'));
            setTimeout(() => { if (!tooltip.classList.contains('show')) tooltip.style.display = 'none'; }, 300);
        }
    });

    // 三大面板切换
    const panels = [
        { btnId: 'toggle-analysis-btn', contentId: 'analysis-content', defaultHTML: '<span class="btn-icon">📜</span> 展开全诗赏析', defaultBg: 'linear-gradient(135deg, #10b981, #059669)' },
        { btnId: 'toggle-quiz-btn', contentId: 'quiz-content', defaultHTML: '<span class="btn-icon">🎯</span> 客观题自测', defaultBg: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
        { btnId: 'toggle-shortq-btn', contentId: 'shortq-content', defaultHTML: '<span class="btn-icon">✍️</span> 简答题特训', defaultBg: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }
    ];
    
    panels.forEach(panel => {
        const btn = document.getElementById(panel.btnId);
        btn.addEventListener('click', function() {
            const content = document.getElementById(panel.contentId);
            const isOpen = content.style.display === 'block';
            
            panels.forEach(p => {
                document.getElementById(p.contentId).style.display = 'none';
                const pb = document.getElementById(p.btnId);
                pb.innerHTML = p.defaultHTML;
                pb.style.background = p.defaultBg;
            });
            
            if (!isOpen) { 
                content.style.display = 'block'; 
                btn.innerHTML = '<span class="btn-icon">⬆️</span> 收起当前面板并重置题目'; 
                btn.style.background = '#64748b';
                if (panel.btnId === 'toggle-quiz-btn') renderQuizCards();
            }
        });
    });
}

// ============================================================
// 页面加载入口
// ============================================================

window.onload = function() {
    if (typeof quizQuestions !== 'undefined') {
        originalQuizQuestions = JSON.parse(JSON.stringify(quizQuestions));
    }
    renderPoem();
    renderTranslation();
    renderAnalysis();
    renderShortQ();
    renderQuizCards(); 
    initInteractions();
};

console.log('✅ script.js 核心逻辑已加载');
