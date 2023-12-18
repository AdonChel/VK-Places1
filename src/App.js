import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Button, Separator, Spacing, Title, IconButton, Subhead, Image, Epic, Tabbar, TabbarItem, FormLayout, FormItem, Input, FormField, Checkbox, Search, ModalPage, ModalPageHeader, PanelHeaderClose, PanelHeaderSubmit, ModalRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/icons'
import './styles/background.css'
import './styles/button.css'
import {Icon16CancelCircleOutline} from '@vkontakte/icons'
import {Icon16MoreHorizontal} from '@vkontakte/icons'
import {Icon28MoreHorizontal} from '@vkontakte/icons'
import {Icon56CheckCircleOutline} from '@vkontakte/icons'
import {Icon28AchievementCircleFillBlue} from '@vkontakte/icons'
import {Icon28UserSquareOutline} from '@vkontakte/icons'
import {Icon28LocationMapOutline} from '@vkontakte/icons'
import {Icon28LogoVk} from '@vkontakte/icons'
import { getSizeX } from '@vkontakte/vkui/dist/lib/adaptivity';

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

	  const rowStyles = {
		display: 'flex',
		justifyContent: 'center',
		gap: 16,
		padding: 16,
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
												<div className='white2'>
													<Title className='text3' style={{fontSize: '21px', width: '37vh', marginLeft: '15px', marginBottom: '220px'}}>Разрешить приложению VK Места доступ к данным о местоположении устройства?</Title>
												</div> 	
												<Button className='button3' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-3')}>
													Разрешить
													</Button>
													<Button className='button3' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-3')}>
													Отклонить
													</Button>
													<Button className='button3' size='l' appearance='accent' sizeY='regular' style={{fontSize:'15px'}} onClick={() => setActivePanel('start-3')}>
													Запретить и не спрашивать
													</Button>																									
											</div>
										</div>
									</Group>
								</Panel>
								<Panel id='start-3'>
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
												<Button className='button1' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-4')}>Далее</Button>
											</div>
										</div>
									</Group>
								</Panel>
								<Panel id='start-4'>
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
											<Button className='button1' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-5')}>Далее</Button>
										</div>
									</Group>
								</Panel>
								<Panel id='start-5'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen4'>
											<div className='div-container'>
											<Icon56CheckCircleOutline className='icon5' style={{width:'389px', height:'479px'}}></Icon56CheckCircleOutline>
											</div>
											<Spacing size={105}></Spacing>
											<Title style={{color:'#FFFFFF'}}>Шаг 3: пользуйтесь!</Title>
											<Icon28MoreHorizontal className='icon5'></Icon28MoreHorizontal>
											<Button className='button2' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-6')}>Готово</Button>
										</div>	
									</Group>
								</Panel>
								<Panel id='start-6'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen5'>
										
											<div className='div-container'>
												<Search type='text' placeholder='Поиск мест и адресов' className='search'>
												
												</Search>
											</div>			
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel('profile')} text='Профиль'>
													<Icon28UserSquareOutline/>
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('places')} text='Места'>
													<Icon28LogoVk />
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('recomendation')} text='Рекомендации'>
													<Icon28LocationMapOutline />
												</TabbarItem>
											</Tabbar>
										</div>
									</Group>
								</Panel>
								<Panel id='profile'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen6'>
											<div className='div-container'>
											<div className='window4'>
													<Spacing size={110}></Spacing>
												<Title style={{marginLeft: '0vh', width: '58vh', fontSize: '20px'}} className='text1'>Продвинутая персона рекомендует!</Title>
												<div className='white5'>
													
												</div>
												<Title className='text1' style={{marginLeft: '13vh'}}>"Кировка"</Title>
												<Spacing size={10}></Spacing>
												<div className='white6'>
												<Title className='text1' style={{fontSize: '16px', padding: '11px'}}>Это самая популярная улица города Челябинска — приходите в будни, чтобы не пришлось убирать людей в фотошопе. Лучшие кадры получатся, если выбрать ракурс в сторону театра оперы и балета или особняка-ресторана «Цыплята табака». Кстати, это первое заведение города</Title>
												</div>
											</div>	
											</div>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Профиль'>
													<Icon28UserSquareOutline/>
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Места'>
													<Icon28LogoVk />
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Рекомендации'>
													<Icon28LocationMapOutline />
												</TabbarItem>
											</Tabbar>
										</div>
									</Group>
								</Panel>
								<Panel id='places'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen6'>
											<div className='div-container'>
												<Spacing size={70}></Spacing>
												<div className='window5'>
												</div>
											</div>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Профиль'>
													<Icon28UserSquareOutline/>
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Места'>
													<Icon28LogoVk />
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Рекомендации'>
													<Icon28LocationMapOutline />
												</TabbarItem>
											</Tabbar>
										</div>
									</Group>
								</Panel>
								<Panel id='recomendation'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen6'>
											<div className='div-container1'>
												<Search type='text' placeholder='Поиск мест и адресов' className='search'>
												</Search>
												
											</div>
											<div className='window6'>
												</div>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Профиль'>
													<Icon28UserSquareOutline/>
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Места'>
													<Icon28LogoVk />
												</TabbarItem>
												<TabbarItem onClick={() => setActivePanel('start-6')} text='Рекомендации'>
													<Icon28LocationMapOutline />
												</TabbarItem>
											</Tabbar>
										</div>
									</Group>
								</Panel>
								<Panel id='start-7'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen2'>
											<div className='div_container'>
											<Spacing size={50}></Spacing>
												<div className='white3'>
													<div style={rowStyles}>
														<div>
															<IconButton>
																<Icon28AchievementCircleFillBlue className='icon5' onClick={() => setActivePanel('start-7')} style={{height: '172px', width: '96px', marginTop: '-66px', marginLeft: '0vh'}}/>
															</IconButton>	
														</div>					
													</div>		
													<Title className='text4' style={{height: '12px', margin: '10px'}}>Начинающий</Title>									
												<div className='window3'>

												</div>
												<Spacing size={10}></Spacing>
												<Icon28AchievementCircleFillBlue className='icon5' style={{height: '172px', width: '96px', marginTop: '-4vh', marginLeft: '0vh'}}></Icon28AchievementCircleFillBlue>
												<Title className='text4' style={{height: '12px', marginTop: '-4vh'}}>Продвинутый</Title>
												<div className='window3'>

												</div>
												<Spacing size={10}></Spacing>
												<Icon28AchievementCircleFillBlue className='icon5' style={{height: '172px', width: '96px', marginTop: '-6vh', marginLeft: '0vh'}}></Icon28AchievementCircleFillBlue>
												<Title className='text4' style={{height: '12px', margin: '1px'}}>Профи</Title>
												<div className='window3'>

												</div>
												</div>	
											</div>
											<Spacing size={150}></Spacing>
											<Button className='button2' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel}>Назад</Button>
										</div>
									</Group>
								</Panel>
								<Panel id='start-8'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen2'>
										<Title className='text6' style={{marginBlock: '13vh'}}>Начинающий</Title>
											<div className='white4'>
												<Title className='text5' style={{textAlign: 'center'}}>посетить 5 ресторанов и оставить на них отзыв</Title>
												<Spacing size={20}></Spacing>
												<Title className='text5' style={{textAlign: 'center'}}>принять участие в ивенте</Title>
												<Spacing size={20}></Spacing>
												<Title className='text5' style={{textAlign: 'center'}}>заходить в приложение 3 дня подряд</Title>
												<Spacing size={20}></Spacing>
												<Title className='text5' style={{textAlign: 'center'}}>выложить сторис с отметкой кафе</Title>
												<Spacing size={20}></Spacing>
												<Title className='text5' style={{textAlign: 'center'}}>сфотографировать свой заказ и выложить</Title>
											</div>
											<Button className='button2' size='l' appearance='accent' sizeY='regular' style={{fontSize:'22px'}} onClick={() => setActivePanel('start-7')}>Назад</Button>
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
