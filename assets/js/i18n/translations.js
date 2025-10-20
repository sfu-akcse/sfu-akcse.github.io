export const translations = {
  en: {
    header: {
      title: 'SFU AKCSE',
      subtitle: 'Connecting Korean-Canadian innovators.',
    },
    nav: {
      about: 'About Us',
      executive: 'Executive',
      events: 'Events',
      projects: 'Projects',
    },
    about: {
      heading: 'About Us',
      body:
        'The SFU Association of Korean-Canadian Scientists and Engineers (SFU AKCSE) is a student-led community that fosters collaboration between researchers, professionals, and students of Korean heritage. We create space for mentorship, networking, and cultural exchange while empowering our members to pursue impactful careers in STEM.',
      highlights: {
        mission: {
          title: 'Our Mission',
          body: 'Champion inclusive innovation and celebrate Korean-Canadian contributions across science and engineering disciplines.',
        },
        community: {
          title: 'Community',
          body: 'Host mentorship programs, cultural gatherings, and collaborative workshops that connect students with industry experts.',
        },
        global: {
          title: 'Global Outlook',
          body: 'Bridge opportunities between Canada and Korea through partnerships, internships, and international exchanges.',
        },
      },
    },
    executive: {
      heading: 'Executive Team',
      body: 'Our executive members bring together expertise across engineering, computing science, life sciences, and business to guide SFU AKCSE.',
      placeholderAlt: (name) => `Illustrated avatar for ${name}`,
      controls: {
        label: 'Executive team horizontal list',
        hint: 'Use the side arrows or swipe sideways to meet every executive.',
        position: (current, total) => `Viewing profile ${current} of ${total}`,
        previous: 'Scroll left to the previous executive',
        next: 'Scroll right to the next executive',
      },
    },
    events: {
      heading: 'Events Timeline',
      body: 'Explore our recent and upcoming programming. Each milestone highlights how we celebrate culture, research, and community connections year-round.',
      toggle: {
        open: 'Collapse events',
        closed: 'Expand events',
      },
      items: {
        futureSummit: {
          title: 'Pacific Rim Research Summit 2025',
          body: 'Joint symposium with Korean partner universities exploring clean energy systems, biomedical devices, and smart infrastructure.',
          link: 'See summit agenda',
          alt: 'Researchers collaborating in a modern conference hall',
        },
        communityLab: {
          title: 'Community Innovation Lab Series',
          body: 'Monthly design-thinking workshops co-led with local nonprofits to address newcomer support and youth STEM outreach.',
          link: 'Register for a lab',
          alt: 'Facilitators guiding students through a workshop activity',
        },
        innovationForum: {
          title: 'Innovation Forum: Bridging AI and Sustainability',
          body: 'Hands-on showcase and panel discussion featuring Korean-Canadian researchers applying machine learning to climate resilience.',
          link: 'View forum details',
          alt: 'Group of students presenting prototypes',
        },
        communityDay: {
          title: 'Community Science Day',
          body: 'Collaboration with local schools delivering bilingual STEM workshops and mentorship circles for newcomer families.',
          link: 'Partner school resources',
          alt: 'Volunteers leading science demos for youth',
        },
        startupShowcase: {
          title: 'Startup Showcase & Pitch Night',
          body: 'Spotlighting Korean-Canadian founders building solutions in robotics, health tech, and sustainable infrastructure.',
          link: 'Meet the founders',
          alt: 'Young founder presenting a pitch deck',
        },
        globalResearch: {
          title: 'Global Research Exchange',
          body: 'Virtual exchange with partner universities in Korea exploring collaborative research labs and student placements.',
          link: 'Explore exchange partners',
          alt: 'Researchers meeting virtually across countries',
        },
      },
    },
    projects: {
      heading: 'Projects & Initiatives',
      body: 'From mentorship pipelines to community impact campaigns, our projects are designed to grow leadership and innovation opportunities for Korean-Canadian students.',
      cta: 'View project website',
    },
    footer: {
      legal: '© 2024 SFU Association of Korean-Canadian Scientists and Engineers',
      tagline: 'Connecting Korean-Canadian innovators through community and mentorship.',
      backToTop: 'Back to top',
    },
  },
  ko: {
    header: {
      title: 'SFU 한인 과학기술자 협회',
      subtitle: '한인-캐나다 혁신가 커뮤니티.',
    },
    nav: {
      about: '소개',
      executive: '임원진',
      events: '행사',
      projects: '프로젝트',
    },
    about: {
      heading: '협회 소개',
      body:
        'SFU 한인 과학기술자 협회(SFU AKCSE)는 연구자, 전문가, 학생이 함께 어우러지는 학생 주도 커뮤니티입니다. 우리는 멘토십, 네트워킹, 문화 교류의 장을 만들며, 회원들이 영향력 있는 STEM 커리어를 구축하도록 돕습니다.',
      highlights: {
        mission: {
          title: '미션',
          body: '과학과 공학 전 분야에서 한인-캐나다인의 포용적 혁신과 기여를 조명합니다.',
        },
        community: {
          title: '커뮤니티',
          body: '산업 전문가와 연결되는 멘토링 프로그램, 문화 행사, 협업 워크숍을 주최합니다.',
        },
        global: {
          title: '글로벌 전망',
          body: '파트너십, 인턴십, 국제 교류를 통해 캐나다와 한국 간 기회를 확장합니다.',
        },
      },
    },
    executive: {
      heading: '임원진 소개',
      body: '임원진은 공학, 컴퓨터 과학, 생명 과학, 비즈니스 등 다양한 전공의 전문성을 바탕으로 협회를 이끌고 있습니다.',
      placeholderAlt: (name) => `${name} 임원 일러스트 아바타`,
      controls: {
        label: '임원진 가로 스크롤 목록',
        hint: '양옆 화살표 또는 가로 스와이프로 모든 임원을 살펴보세요.',
        position: (current, total) => `프로필 ${current} / ${total}`,
        previous: '왼쪽으로 스크롤해 이전 임원 보기',
        next: '오른쪽으로 스크롤해 다음 임원 보기',
      },
    },
    events: {
      heading: '연도별 행사',
      body: '문화, 연구, 커뮤니티를 함께 나누는 최근 및 예정된 프로그램을 살펴보세요.',
      toggle: {
        open: '행사 접기',
        closed: '행사 펼치기',
      },
      items: {
        futureSummit: {
          title: '2025 퍼시픽 림 연구 서밋',
          body: '청정 에너지, 의료기기, 스마트 인프라를 주제로 한국 파트너 대학과 공동으로 개최하는 심포지엄.',
          link: '서밋 일정 보기',
          alt: '현대적인 컨퍼런스홀에서 협력 중인 연구자들',
        },
        communityLab: {
          title: '커뮤니티 이노베이션 랩 시리즈',
          body: '지역 비영리단체와 함께 진행하는 디자인 씽킹 워크숍으로 신규 이민자 지원과 청소년 STEM 교육을 모색합니다.',
          link: '랩 등록하기',
          alt: '워크숍 활동을 안내하는 퍼실리테이터들',
        },
        innovationForum: {
          title: '혁신 포럼: AI와 지속가능성',
          body: '머신러닝을 기후 회복력에 적용하는 한인-캐나다 연구자들의 패널과 쇼케이스.',
          link: '포럼 자세히 보기',
          alt: '프로토타입을 발표하는 학생들',
        },
        communityDay: {
          title: '커뮤니티 과학의 날',
          body: '현지 학교와 협력하여 진행한 이중언어 STEM 워크숍과 멘토링 프로그램.',
          link: '협력 학교 자료',
          alt: '청소년에게 과학 실험을 보여주는 자원봉사자들',
        },
        startupShowcase: {
          title: '스타트업 쇼케이스 & 피치 나이트',
          body: '로봇공학, 헬스테크, 지속 가능한 인프라 분야 한인 창업가들을 조명합니다.',
          link: '창업가 만나기',
          alt: '피치 덱을 발표하는 젊은 창업가',
        },
        globalResearch: {
          title: '글로벌 연구 교류',
          body: '한국 파트너 대학과 공동 연구실 및 학생 교류 기회를 탐색하는 온라인 교류.',
          link: '교류 파트너 알아보기',
          alt: '국가 간 온라인 미팅 중인 연구자들',
        },
      },
    },
    projects: {
      heading: '프로젝트 & 이니셔티브',
      body: '멘토십 파이프라인부터 커뮤니티 캠페인까지, 프로젝트를 통해 한인-캐나다 학생들의 리더십과 혁신 역량을 확장합니다.',
      cta: '프로젝트 사이트 방문',
    },
    footer: {
      legal: '© 2024 SFU 한인 과학기술자 협회',
      tagline: '커뮤니티와 멘토십으로 한인-캐나다 혁신가를 연결합니다.',
      backToTop: '맨 위로',
    },
  },
};
