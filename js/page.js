const pageLinks = document.querySelectorAll('.page-link');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');

        // 2, 3 클릭 시 모달 열기
        if (page === '2' || page === '3') {
            modal.style.display = 'flex';
        }
    });
});

// 닫기 버튼 클릭 시
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 배경 클릭 시 닫기
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

