import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';
import { Products } from '../../date/Products';
import Product from '../../Components/Product';

export function ShopLeftSidebar() {
	return (
		<>
			<HeaderMain />
			<section className='page-title-area' style={{}}>
				<div className='shape-top'>
					<img className='bg-img' src={one} />
				</div>
				<div className='container' style={{}}>
					<div className='row align-items-center' style={{}}>
						<div className='col-lg-12 m-auto' style={{}}>
							<div className='page-title-content text-center' style={{}}>
								<h2 className='title h2' style={{}}>
									Product
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										Product
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='product-area product-grid-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 order-1 order-lg-0'>
							<div className='sidebar-area shop-sidebar-area'>
								<div className='widget-item'>
									<div className='widget-title'>
										<h3 className='title'>Product Categories</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-categories'>
											<ul>
												<li>
													<a href='shop.html'>
														Accesasories <span>(6)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Computer <span>(4)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Covid-19 <span>(2)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Electronics <span>(6)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Frame Sunglasses <span>(12)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Furniture <span>(7)</span>
													</a>
												</li>
												<li>
													<a href='shop.html'>
														Genuine Leather <span>(9)</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='widget-item'>
									<div className='widget-filter'>
										<div className='widget-title'>
											<h3 className='title'>Price Filter</h3>
										</div>
										<div className='widget-body'>
											<div className='widget-price-filter'>
												<div className='slider-labels'>
													<div className='caption'>
														<span id='slider-range-value1'>$16</span>
													</div>
													<span className='range-separator'></span>
													<div className='caption'>
														<span id='slider-range-value2'>$306</span>
													</div>
												</div>
												<div
													className='slider-range noUi-target noUi-ltr noUi-horizontal noUi-background'
													id='slider-range'
												>
													<div className='noUi-base'>
														<div className='noUi-origin noUi-connect' style={{ left: '0%' }}>
															<div className='noUi-handle noUi-handle-lower'></div>
														</div>
														<div className='noUi-origin noUi-background' style={{ left: '75.5208%' }}>
															<div className='noUi-handle noUi-handle-upper'></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='widget-item'>
									<div className='widget-title'>
										<h3 className='title'>Color</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-color'>
											<div className='form-check'>
												<input
													className='form-check-input red'
													type='radio'
													name='colorRadio'
													id='colorRadio1'
													//   checked=""
												/>
												<label
													className='form-check-label'
													//   for="colorRadio1"
												>
													Red (12)
												</label>
											</div>
											<div className='form-check'>
												<input className='form-check-input black' type='radio' name='colorRadio' id='colorRadio2' />
												<label
													className='form-check-label'
													//   for="colorRadio2"
												>
													Light Black (09)
												</label>
											</div>
											<div className='form-check'>
												<input className='form-check-input blue' type='radio' name='colorRadio' id='colorRadio3' />
												<label
													className='form-check-label'
													//   for="colorRadio3"
												>
													Dark Blue (07)
												</label>
											</div>
											<div className='form-check'>
												<input className='form-check-input gray' type='radio' name='colorRadio' id='colorRadio4' />
												<label
													className='form-check-label'
													//   for="colorRadio4"
												>
													Gray (11)
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className='widget-item mb-md-0'>
									<div className='widget-title'>
										<h3 className='title'>Size</h3>
									</div>
									<div className='widget-body'>
										<div className='widget-size'>
											<div className='form-check'>
												<input
													className='form-check-input black'
													type='radio'
													name='colorRadio2'
													id='colorRadio5'
													//   checked=""
												/>
												<label
													className='form-check-label'
													//   for="colorRadio5"
												>
													M (12)
												</label>
											</div>
											<div className='form-check'>
												<input className='form-check-input black' type='radio' name='colorRadio2' id='colorRadio6' />
												<label
													className='form-check-label'
													//   for="colorRadio6"
												>
													L (09)
												</label>
											</div>
											<div className='form-check'>
												<input className='form-check-input black' type='radio' name='colorRadio2' id='colorRadio7' />
												<label
													className='form-check-label'
													//   for="colorRadio7"
												>
													XL (07)
												</label>
											</div>
											<div className='form-check'>
												<input className='form-check-input black' type='radio' name='colorRadio2' id='colorRadio8' />
												<label
													className='form-check-label'
													//   for="colorRadio8"
												>
													XXL (11)
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-9 order-0 order-lg-1'>
							<div className='shop-toolbar-wrap'>
								<div className='product-showing-status'>
									<p className='count-result'>
										<span>12 </span> Product Found of <span> 30</span>
									</p>
								</div>
								<div className='product-view-mode'>
									<nav>
										<div className='nav nav-tabs active' id='nav-tab' role='tablist'>
											<button
												className='nav-link active'
												id='column-three-tab'
												data-bs-toggle='tab'
												data-bs-target='#column-three'
												type='button'
												role='tab'
												aria-controls='column-three'
												aria-selected='true'
											>
												<i className='fa fa-th'></i>
											</button>

											<button
												className='nav-link'
												id='nav-list-tab'
												data-bs-toggle='tab'
												data-bs-target='#nav-list'
												type='button'
												role='tab'
												aria-controls='nav-list'
												aria-selected='false'
											>
												<i className='fa fa-list'></i>
											</button>

											<button
												className='nav-link'
												id='column-two-tab'
												data-bs-toggle='tab'
												data-bs-target='#column-two'
												type='button'
												role='tab'
												aria-controls='column-two'
												aria-selected='true'
											>
												<i className='fa fa-th-large'></i>
											</button>
										</div>
									</nav>
								</div>
								<div className='product-sorting-menu product-sorting'>
									<span className='current'>
										Sort By :{' '}
										<span>
											{' '}
											Default <i className='fa fa-angle-down'></i>
										</span>
									</span>
									<ul>
										<li className='active'>
											<a href='' className='active'>
												Sort by Default
											</a>
										</li>
										<li>
											<a href=''>Sort by Popularity</a>
										</li>
										<li>
											<a href=''>Sort by Rated</a>
										</li>
										<li>
											<a href=''>Sort by Latest</a>
										</li>
										<li>
											<a href=''>
												Sort by Price: <i className='lastudioicon-arrow-up'></i>
											</a>
										</li>
										<li>
											<a href=''>
												Sort by Price: <i className='lastudioicon-arrow-down'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='tab-content' id='nav-tabContent'>
								<div
									className='tab-pane fade show active'
									id='column-three'
									role='tabpanel'
									aria-labelledby='column-three-tab'
								>
									<div className='row'>
										{Products.map(product => (
											<div className='col-lg-4 col-md-4 col-sm-6'>
												<Product product={product} key={product.id} className='' />
											</div>
										))}
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='pagination-area'>
										<nav>
											<ul className='page-numbers'>
												<li>
													<a className='page-number active' href=''>
														1
													</a>
												</li>
												<li>
													<a className='page-number' href=''>
														2
													</a>
												</li>
												<li>
													<a className='page-number' href=''>
														3
													</a>
												</li>
												<li>
													<a className='page-number next' href=''>
														<i className='fa fa-angle-right'></i>
													</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FooterMain />
			<ButtonScrollTop />
		</>
	);
}
{
	/* <div className='col-lg-3 col-md-4 col-sm-6'></div> */
}
