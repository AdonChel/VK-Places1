import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Button, Separator, Spacing, Title, IconButton, Subhead, Image, Epic, Tabbar, TabbarItem, FormLayout, FormItem, Input, FormField, Checkbox, Search } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/icons'
import './styles/background.css'
import './styles/button.css'
import {Icon16CancelCircleOutline} from '@vkontakte/icons'
import {Icon16MoreHorizontal} from '@vkontakte/icons'
import {Icon28MoreHorizontal} from '@vkontakte/icons'
import {Icon56CheckCircleOutline} from '@vkontakte/icons'

const App = () => {
	const [activePanel, setActivePanel] = useState('start-screen');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	// const go = e => {
	// 	setActivePanel(e.currentTarget.dataset.to);
	// };

	const containerStyles = {
		width: '100vw',
		height: '98vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F7F4F2',
	  };


	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout header={<PanelHeader separator={false}/>}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Panel id='start-screen'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen' onClick={() => setActivePanel('start-1')}>
										</div>
									</Group>
								</Panel>
								<Panel id='start-1'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen1'>
											<div className='window1'>
												<Subhead className=''></Subhead>	
											</div>
											<Spacing size={70}></Spacing>
											<Title className='text' style={{fontSize:'50px'}}>VK Места</Title>
											<Spacing size={70}></Spacing>
											<Checkbox className='checkBox' appearance='light'>
												<Subhead style={{fontWeight:'700', fontSize:'17px', color:'#FFFFFF'}}>Найти интересные места для фотографий</Subhead>
											</Checkbox>
											<Checkbox className='checkBox' appearance='light'>
												<Subhead style={{fontWeight:'700', fontSize:'17px', color:'#FFFFFF'}}>Оставить отзыв для места</Subhead>
											</Checkbox>
											<Checkbox className='checkBox' appearance='light'>
												<Subhead style={{fontWeight:'700', fontSize:'17px', color:'#FFFFFF'}}>Сравнить рейтинг мест и выбрать лучшее для вас</Subhead>
											</Checkbox>
											<Spacing size={40}></Spacing>
											<Button className='button' size='l' appearance='accent-invariable' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-2')}>
												Далее
											</Button>
											<Spacing size={60}></Spacing>	
										</div>
									</Group>
								</Panel>
								<Panel id='start-2'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen2'>
											<div className='div-container'>	
												<div className='white'>
													<Title className='text1' style={{fontSize:'23px'}}>Ваш город:</Title>
													<Spacing size={10}></Spacing>
													<Title className='text1' style={{fontSize:'34px'}}>Челябинск</Title>
													<div className='window2'>

													</div>
												</div>
												<Spacing size={40}></Spacing>
												<Title style={{color:'#FFFFFF'}}>Шаг 1</Title>
												<Icon28MoreHorizontal className='icon3'></Icon28MoreHorizontal>
												<Spacing size={60}></Spacing>
												<Button className='button1' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-3')}>Далее</Button>
											</div>
										</div>
									</Group>
								</Panel>
								<Panel id='start-3'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen3'>
											<div className='div-container'>
											<Title className='text2' style={{fontSize:'30px'}}>Что вы предпочитаете?</Title>
											<Spacing size={30}></Spacing>
											<Checkbox className='checkBox1' appearance='light'>
												<Subhead style={{fontWeight:'700', fontSize:'17px', color:'#094082'}}>Развлечения</Subhead>
											</Checkbox>
											<Checkbox className='checkBox1' appearance='light'>
												<Subhead style={{fontWeight:'700', fontSize:'17px', color:'#094082'}}>Гастрономия</Subhead>
											</Checkbox>
											<Checkbox className='checkBox1' appearance='light'>
												<Subhead style={{fontWeight:'700', fontSize:'17px', color:'#094082'}}>Культура и искусство</Subhead>
											</Checkbox>
											<Checkbox className='checkBox1' appearance='light'>
												<Subhead style={{fontWeight:'700', fontSize:'17px', color:'#094082'}}>Красивые места для фото</Subhead>
											</Checkbox>	
											</div>
											<Spacing size={40}></Spacing>
											<Title style={{color:'#FFFFFF'}}>Шаг 2: выбор интересов</Title>
											<Icon28MoreHorizontal className='icon4'></Icon28MoreHorizontal>
											<Spacing size={60}></Spacing>
											<Button className='button1' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-4')}>Далее</Button>
										</div>
									</Group>
								</Panel>
								<Panel id='start-4'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen4'>
											<div className='div-container'>
											<Icon56CheckCircleOutline className='icon5' style={{width:'389px', height:'479px'}}></Icon56CheckCircleOutline>
											</div>
											<Spacing size={105}></Spacing>
											<Title style={{color:'#FFFFFF'}}>Шаг 3: пользуйтесь!</Title>
											<Icon28MoreHorizontal className='icon5'></Icon28MoreHorizontal>
											<Button className='button2' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-4')}>Готово</Button>
										</div>	
									</Group>
								</Panel>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
