// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://kb.smartecommerce.it',
	integrations: [
		starlight({
			title: 'SeC kLeb',
			description: 'Knowledge Base tecnica dei prodotti Smart eCommerce.',
			favicon: '/favicon.png',
			logo: {
				src: './public/sec-kleb-logo.png',
				alt: 'SeC kLeb',
				replacesTitle: false,
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Italiano',
					lang: 'it',
				},
			},
			customCss: ['./src/styles/smart-kb.css'],
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#5c0464' } },
				{ tag: 'meta', attrs: { name: 'robots', content: 'index,follow' } },
			],
			lastUpdated: true,
			sidebar: [
				{
					label: 'Fondamenti',
					items: [
						{ label: 'Introduzione', slug: 'index' },
						{ label: 'Manuale operativo AI', slug: 'ai/manuale-operativo' },
						{ label: 'Matrice prodotti', slug: 'ai/matrice-prodotti' },
						{ label: 'Contesto training AI', slug: 'ai/contesto-training' },
						{ label: 'Architettura ecosistema', slug: 'ecosistema/architettura' },
						{ label: 'Contratti tecnici', slug: 'ecosistema/contratti-tecnici' },
					],
				},
				{
					label: 'Prodotti',
					items: [
						{ label: 'iDash', slug: 'prodotti/idash' },
						{ label: 'Smart Bootstrap Manager', slug: 'prodotti/smart-bootstrap-manager' },
						{ label: 'Smart Customizer Framework', slug: 'prodotti/smart-customizer-framework' },
						{ label: 'Smart Builder Site', slug: 'prodotti/smart-builder-site' },
						{ label: 'AI-HTML Theme', slug: 'prodotti/ai-html-theme' },
						{ label: 'Smart AI Assistant', slug: 'prodotti/smart-ai-assistant' },
						{ label: 'Smart AI Gateway Hub', slug: 'prodotti/smart-ai-gateway-hub' },
						{ label: 'Smart AI Writer', slug: 'prodotti/smart-ai-writer' },
						{ label: 'Smart Cleaner Reset', slug: 'prodotti/smart-cleaner-reset' },
						{ label: 'Smart Site Login Personalize', slug: 'prodotti/smart-site-login-personalize' },
						{ label: 'Smart License Manager', slug: 'prodotti/smart-license-manager' },
					],
				},
				{
					label: 'Guide operative',
					items: [
						{ label: 'Scegliere il percorso AI', slug: 'guide/percorsi-ai' },
						{ label: 'Esporta contesto per AI', slug: 'guide/esporta-contesto-ai' },
						{ label: 'Attivare Smart AI Studio', slug: 'guide/attivare-smart-ai-studio' },
						{ label: 'Flusso AI standalone', slug: 'guide/flusso-ai-standalone' },
						{ label: 'Installazione stack WordPress', slug: 'guide/installazione-stack-wordpress' },
						{ label: 'Flusso agente AI', slug: 'guide/flusso-agente-ai' },
						{ label: 'AI commerciali in chat', slug: 'guide/ai-commerciali-chat-classica' },
						{ label: 'Guida sviluppatori', slug: 'guide/guida-sviluppatori' },
						{ label: 'Authoring AI Canvas', slug: 'guide/authoring-ai-canvas' },
						{ label: 'Governare SBM con una AI', slug: 'guide/smart-bootstrap-manager-ai-workflow' },
						{ label: 'Aggiornamento documentazione', slug: 'guide/aggiornare-documentazione' },
						{ label: 'Checklist rilascio', slug: 'operazioni/checklist-rilascio' },
					],
				},
				{
					label: 'API e integrazioni',
					items: [
						{ label: 'API e Swagger', slug: 'api/swagger-index' },
						{ label: 'API AI Smart Bootstrap Manager', slug: 'api/smart-bootstrap-manager-ai-api' },
						{ label: 'KnowledgePack API', slug: 'api/knowledge-packs' },
						{ label: 'Import/export stack', slug: 'api/import-export-stack' },
						{ label: 'Manifest AI-HTML', slug: 'api/ai-html-integration-manifest' },
						{ label: 'Runtime WordPress Canvas', slug: 'api/wordpress-runtime-canvas' },
						{ label: 'AI Assistant tools', slug: 'api/ai-assistant-tools' },
						{ label: 'Smart AI Gateway Hub API', slug: 'api/smart-ai-gateway-hub-api' },
						{ label: 'Code Slots AI-HTML', slug: 'api/ai-html-code-slots' },
						{ label: 'Builder JSON', slug: 'api/builder-json' },
						{ label: 'Smart Login API', slug: 'api/smart-login-api' },
						{ label: 'License API', slug: 'api/license-api' },
					],
				},
			],
		}),
	],
});
