// MoneyButler 랜딩페이지 JavaScript (간단 버전)

// 1. 선착순 카운터
let signupCount = 27;
const maxSignups = 100;

function updateCounter() {
    const remaining = maxSignups - signupCount;
    const counterElement = document.getElementById('urgencyCounter');
    
    if (counterElement) {
        if (remaining > 0) {
            counterElement.textContent = `${remaining}명 남음!`;
        } else {
            counterElement.textContent = `마감 임박!`;
        }
    }
}

// 페이지 로드 시 카운터 업데이트
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCounter);
} else {
    updateCounter();
}

// 30-60초마다 카운터 증가 (시뮬레이션)
setInterval(() => {
    if (signupCount < maxSignups) {
        signupCount += Math.random() < 0.3 ? 1 : 0;
        updateCounter();
    }
}, Math.random() * 30000 + 30000);

// 2. 폼 제출 처리
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            
            if (nameInput && emailInput) {
                const name = nameInput.value;
                const email = emailInput.value;
                
                // 간단한 성공 메시지
                alert(`${name}님, 사전 신청이 완료되었습니다!\n${email}로 연락드리겠습니다.`);
                
                // 폼 초기화
                form.reset();
                
                // 카운터 증가
                signupCount++;
                updateCounter();
                
                // 로컬 스토리지에 저장
                localStorage.setItem('moneybutler_signup', JSON.stringify({
                    name: name,
                    email: email,
                    timestamp: new Date().toISOString()
                }));
            }
        });
    }
});

// 3. 부드러운 스크롤 (CTA 버튼 클릭 시)
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const signupForm = document.querySelector('.signup-form');
    
    if (ctaButton && signupForm) {
        ctaButton.addEventListener('click', function() {
            signupForm.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        });
    }
});

// 4. 중복 신청 방지
window.addEventListener('DOMContentLoaded', function() {
    const previousSignup = localStorage.getItem('moneybutler_signup');
    const form = document.querySelector('.signup-form');
    
    if (previousSignup && form) {
        const data = JSON.parse(previousSignup);
        const notice = document.createElement('p');
        notice.style.color = '#D4AF37';
        notice.style.fontWeight = 'bold';
        notice.style.marginTop = '1rem';
        notice.textContent = `${data.name}님, 이미 신청하셨습니다!`;
        form.appendChild(notice);
    }
});

// 5. 디버그 정보 (개발용)
console.log('🎯 MoneyButler 랜딩페이지 로드 완료');
console.log('📊 현재 신청자 수:', signupCount);
console.log('🎁 남은 얼리버드 혜택:', maxSignups - signupCount, '명');