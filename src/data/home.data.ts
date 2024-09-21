import { ImageConstant } from "@/constants";

const {
	ICON_TARGET,
	ICON_DATA,
	ICON_TPS,
	ICON_PEOPLE,
	ICON_TIME,
	ICON_INSTAGRAM,
} = ImageConstant;
export const HomeData = {
	title: "CyberPolitics.AI",
	subtitle: `Menggunakan <b className="text-[#54F4FC]">AI</b> dan <b className="text-[#54F4FC]">Big Data</b> untuk membantu Calon meningkatkan <b className="text-[#54F4FC]">Efektivitas</b> Kampanye melalui Analisis Data <b className="text-[#54F4FC]">Politik</b> yang <b className="text-[#54F4FC]">Akurat</b>`,

	sectionProblem: {
		title: "Permasalahan Pemilu",
		lists: [
			{
				id: 1,
				title: "Alokasi Anggaran Yang Membengkak",
				subtitle:
					"Kandidat kerap kali kesulitan mengontrol anggaran yang disiapkan karena kondisi lapangan yang sangat dinamis.",
			},
			{
				id: 2,
				title: "Persaingan Yang Kompetitif",
				subtitle:
					"Kandidat kerap kali kesulitan mempertahankan basis suara dan memetakan potensi suara yang bisa diraih.",
			},
			{
				id: 3,
				title: "Kebutuhan Konstituen Yang Beragam",
				subtitle:
					"Kandidat kerap kali kesulitan memahami kebutuhan konstituen karena keterbatasan data hingga isu terkini di dapil.",
			},
			{
				id: 4,
				title: "Manajemen Timses Yang Rumit",
				subtitle:
					"Kandidat kerap kali kesulitan memantau pergerakan timses dan validasi hasil pekerjaan timses dilakukan secara manual.",
			},
		],
	},

	captions: `“ Di era teknologi modern, politik jadi lebih mudah dan efisien. Data pemilih dianalisis cepat untuk kampanye yang tepat, dan komunikasi dengan masyarakat lebih lancar. “`,

	solutions: {
		title: "Layanan yang Kami Tawarkan",
		list: [
			{
				id: 1,
				title: "Optimalisasi Waktu dan Anggaran Kampanye",
				description:
					"Big data berbasis teknologi Artificial Intelligence yang memberikan data secara komprehensif dan akurat.",
				image: ICON_TIME,
			},
			{
				id: 2,
				title: "Strategi Penargetan Mikro",
				description:
					"Menampilkan peta politik, sosial, dan ekonomi, daerah pemilihan Anda secara rinci.",
				image: ICON_TARGET,
			},

			{
				id: 3,
				title: "Menyediakan Data Pemilih Potensial Nasional",
				description: "Dapatkan analisis potensi suara, hingga level TPS.",
				image: ICON_DATA,
			},
			{
				id: 4,
				title: "Personalisasi Strategi Kampanye",
				description:
					"Dapatkan strategi personal untuk kampanye nano targeting.",
				image: ICON_PEOPLE,
			},
			{
				id: 5,
				title: "Rekomendasi TPS Prioritas",
				description:
					"Dapatkan 3 kategori rekomendasi TPS. Mulai dari TPS bertahan, TPS serang hingga TPS gerilya.",
				image: ICON_TPS,
			},
		],
	},

	subtitles: [
		"Naskah Kampanye",
		"Rekomendasi Strategi",
		"Micro Strategi",
		"Desain APK",
		"Aplikasi Manajemen Tim",
		"Peta Politik Dapil",
		"Peta Ekonomi Dapil",
		"Peta Sosial Dapil",
	],

	socialMedia: [
		// {
		// 	id: 1,
		// 	icon: ICON_FACEBOOK,
		// 	url: "#",
		// 	title: "Facebook",
		// },
		// {
		// 	id: 2,
		// 	icon: ICON_TWITTER,
		// 	url: "#",
		// 	title: "Twitter",
		// },
		{
			id: 3,
			icon: ICON_INSTAGRAM,
			url: "https://www.instagram.com/cyberpolitics.ai?igsh=MTRsMm45NDE1emJrcA==",
			title: "Instagram",
		},
		// {
		// 	id: 4,
		// 	icon: ICON_LINKEDIN,
		// 	url: "#",
		// 	title: "Linkedin",
		// },
		// {
		// 	id: 5,
		// 	icon: ICON_YOUTUBE,
		// 	url: "#",
		// 	title: "YouTube",
		// },
		// {
		// 	id: 6,
		// 	icon: ICON_TIKTOK,
		// 	url: "#",
		// 	title: "Tiktok",
		// },
	],
};
