// MoneyButler 랜딩페이지 JavaScript

// =============================
// 1. 긴급성 카운터 (선착순 100명)
// =============================
let signupCount = 27; // 보수적으로 시작
const maxSignups = 100;

function updateSignupCounter() {
    const remaining = maxSignups - signupCount;
    const counterElement = document.getElementById('urgencyCounter');
    
    if (remaining > 0) {
        counterElement.textContent = `${remaining}명 남음!`;
    } else {
        counterElement.textContent = `마감 임박!`;
    }
}

// 페이지 로드 시 카운터 표시
updateSignupCounter();

// 30-60초마다 랜덤하게 신청자 수 증가 (시뮬레이션)
setInterval(() => {
    if (signupCount < maxSignups) {
        signupCount += Math.random() < 0.3 ? 1 : 0; // 30% 확률로 증가
        updateSignupCounter();
    }
}, Math.random() * 30000 + 30000); // 30-60초 랜덤

// =============================
// 2. Sticky CTA 표시/숨김
// =============================
const stickyCta = document.getElementById('stickyCta');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 스크롤 다운 시 sticky CTA 표시
    if (scrollTop > 800) {
        stickyCta.classList.add('visible');
    }
    
    // 스크롤 업 시 숨김
    if (scrollTop < lastScrollTop - 50) {
        stickyCta.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
});

// =============================
// 3. 폼으로 스크롤
// =============================
function scrollToForm() {
    const formElement = document.getElementById('signupForm');
    formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

// =============================
// 4. FAQ 아코디언
// =============================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // 모든 FAQ 닫기
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 클릭한 FAQ만 열기 (이미 열려있었다면 닫힌 상태 유지)
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// =============================
// 5. 폼 제출 처리
// =============================
function handleSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('betaForm');
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        interest: document.querySelector('input[name="interest"]:checked').value
    };
    
    // Google Forms 연동 (실제 사용 시 주석 해제 및 수정 필요)
    // const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    // const formBody = new URLSearchParams({
    //     'entry.1234567890': formData.name,
    //     'entry.0987654321': formData.email,
    //     'entry.1122334455': formData.interest
    // });
    
    // fetch(googleFormUrl, {
    //     method: 'POST',
    //     body: formBody,
    //     mode: 'no-cors'
    // });
    
    // 성공 메시지 표시
    showSuccessMessage(formData);
    
    // 폼 숨기기
    form.style.display = 'none';
    
    // 신청자 수 증가
    signupCount++;
    updateSignupCounter();
    
    // 로컬 스토리지에 저장 (중복 신청 방지)
    localStorage.setItem('moneybutler_signup', JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
    }));
}

// =============================
// 6. 성공 메시지 표시
// =============================
function showSuccessMessage(formData) {
    const successMessage = document.getElementById('successMessage');
    document.getElementById('userName').textContent = formData.name;
    document.getElementById('userEmail').textContent = formData.email;
    
    successMessage.style.display = 'block';
    successMessage.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

// =============================
// 7. 공유 기능
// =============================
function shareToKakao() {
    // 카카오톡 공유 (실제 사용 시 카카오 SDK 필요)
    alert('카카오톡 공유 기능은 정식 출시 시 제공됩니다.');
    
    // 실제 구현 예시 (카카오 SDK 로드 후):
    // Kakao.Share.sendDefault({
    //     objectType: 'feed',
    //     content: {
    //         title: 'MoneyButler - 당신의 손 안의 개인 자산관리사',
    //         description: '평생 50% 할인 + 5,000원 리워드 (선착순 100명)',
    //         imageUrl: 'https://moneybutler.app/og-image.png',
    //         link: {
    //             mobileWebUrl: window.location.href,
    //             webUrl: window.location.href
    //         }
    //     }
    // });
}

function copyLink() {
    const url = window.location.href;
    
    navigator.clipboard.writeText(url).then(() => {
        alert('링크가 복사되었습니다! 친구에게 공유해보세요.');
    }).catch(() => {
        // 폴백: 구식 브라우저 대응
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('링크가 복사되었습니다!');
    });
}

// =============================
// 8. 스크롤 애니메이션
// =============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 애니메이션 대상 요소 관찰
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.problem-card, .solution-card, .testimonial-card, .diff-card, .step'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// =============================
// 9. 중복 신청 방지
// =============================
window.addEventListener('DOMContentLoaded', () => {
    const previousSignup = localStorage.getItem('moneybutler_signup');
    
    if (previousSignup) {
        const data = JSON.parse(previousSignup);
        const form = document.getElementById('betaForm');
        
        // 이미 신청한 경우 폼 숨기고 메시지 표시
        form.style.display = 'none';
        showSuccessMessage(data);
        
        // 안내 메시지 추가
        const successMessage = document.getElementById('successMessage');
        const notice = document.createElement('p');
        notice.style.marginTop = '1rem';
        notice.style.color = 'var(--text-muted)';
        notice.style.fontSize = '0.9rem';
        notice.textContent = '이미 사전 신청을 완료하셨습니다.';
        successMessage.appendChild(notice);
    }
});

// =============================
// 10. 실시간 관심 기능 통계 (시뮬레이션)
// =============================
const interestStats = {
    ai: 42,
    game: 31,
    reward: 18,
    investment: 9
};

// 라디오 버튼 선택 시 인기도 표시 (선택사항)
document.querySelectorAll('input[name="interest"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const value = e.target.value;
        const percentage = interestStats[value];
        console.log(`${percentage}%의 사용자가 이 기능에 관심을 보이고 있습니다!`);
        // 실제 구현 시 UI에 표시 가능
    });
});

// =============================
// 11. 페이지 이탈 방지 (선택사항)
// =============================
let hasInteracted = false;

document.addEventListener('mousemove', () => {
    hasInteracted = true;
}, { once: true });

document.addEventListener('mouseout', (e) => {
    if (e.clientY < 0 && hasInteracted && !localStorage.getItem('moneybutler_signup')) {
        // 마우스가 페이지 상단을 벗어날 때 (이탈 의도)
        // Exit intent popup 표시 가능 (선택사항)
        console.log('Exit intent detected!');
    }
});

// =============================
// 12. 성능 최적화: 이미지 레이지 로딩
// =============================
if ('loading' in HTMLImageElement.prototype) {
    // 브라우저가 기본 lazy loading 지원
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // 폴백: Intersection Observer 사용
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// =============================
// 13. 디버그 정보 (개발용)
// =============================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🎯 MoneyButler 랜딩페이지 로드 완료');
    console.log('📊 현재 신청자 수:', signupCount);
    console.log('🎁 남은 얼리버드 혜택:', maxSignups - signupCount, '명');
}