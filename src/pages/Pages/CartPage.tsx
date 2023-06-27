import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import HeaderMain from '../../Components/HeaderMain';
import { FooterMain } from '../../Components/FooterMain';
import one from '../../img/homeOne/1.webp';
import { Link } from 'react-router-dom';
import { HomeOne } from '../../date/Items';
import ButtonScrollTop from '../../Components/ButtonScrollTop';

export function CartPage() {
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
									Cart
								</h2>
								<div className='bread-crumbs' style={{}}>
									<Link to={HomeOne}>Home</Link>
									<span className='breadcrumb-sep' style={{}}>
										{' '}
										//{' '}
									</span>
									<span className='active' style={{}}>
										{' '}
										Cart
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='product-area cart-page-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 m-auto'>
							<div className='section-title text-center'>
								<h2 className='title'>Cart</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='cart-table-wrap'>
								<div className='cart-table table-responsive'>
									<table>
										<thead>
											<tr>
												<th className='width-thumbnail'></th>
												<th className='width-name'>Product</th>
												<th className='width-price'> Price</th>
												<th className='width-quantity'>Quantity</th>
												<th className='width-subtotal'>Subtotal</th>
												<th className='width-remove'></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='product-thumbnail'>
													<a href='shop-single-product.html'>
														<img src='assets/img/shop/details/nav1.jpg' alt='Image' />
													</a>
												</td>
												<td className='product-name'>
													<h5>
														<a href='shop-single-product.html'>Jigsaw Puzzles For Kids</a>
													</h5>
												</td>
												<td className='product-price'>
													<span className='amount'>$120.00</span>
												</td>
												<td className='cart-quality'>
													<div className='product-details-quality'>
														<input
															type='number'
															className='input-text qty text'
															step='1'
															min='1'
															max='100'
															name='quantity'
															value='1'
															title='Qty'
															placeholder=''
														/>
													</div>
												</td>
												<td className='product-total'>
													<span>$120.00</span>
												</td>
												<td className='product-remove'>
													<a href='#'>
														<i className='ion-ios-trash-outline'></i>
													</a>
												</td>
											</tr>
											<tr>
												<td className='product-thumbnail'>
													<a href='shop-single-product.html'>
														<img src='assets/img/shop/details/nav2.jpg' alt='Image' />
													</a>
												</td>
												<td className='product-name'>
													<h5>
														<a href='shop-single-product.html'>Bruder Toys Mini Ships</a>
													</h5>
												</td>
												<td className='product-price'>
													<span className='amount'>$120.00</span>
												</td>
												<td className='cart-quality'>
													<div className='product-details-quality'>
														<input
															type='number'
															className='input-text qty text'
															step='1'
															min='1'
															max='100'
															name='quantity'
															value='1'
															title='Qty'
															placeholder=''
														/>
													</div>
												</td>
												<td className='product-total'>
													<span>$120.00</span>
												</td>
												<td className='product-remove'>
													<a href='#'>
														<i className='ion-ios-trash-outline'></i>
													</a>
												</td>
											</tr>
											<tr>
												<td className='product-thumbnail'>
													<a href='shop-single-product.html'>
														<img src='assets/img/shop/details/nav3.jpg' alt='Image' />
													</a>
												</td>
												<td className='product-name'>
													<h5>
														<a href='shop-single-product.html'>Sassy Crib and Floor Mirror</a>
													</h5>
												</td>
												<td className='product-price'>
													<span className='amount'>$120.00</span>
												</td>
												<td className='cart-quality'>
													<div className='product-details-quality'>
														<input
															type='number'
															className='input-text qty text'
															step='1'
															min='1'
															max='100'
															name='quantity'
															value='1'
															title='Qty'
															placeholder=''
														/>
													</div>
												</td>
												<td className='product-total'>
													<span>$120.00</span>
												</td>
												<td className='product-remove'>
													<a href='#'>
														<i className='ion-ios-trash-outline'></i>
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className='cart-shiping-update-wrapper'>
								<div className='cart-shiping-btn continure-btn'>
									<a className='btn btn-link' href='shop.html'>
										<i className='ion-ios-arrow-left'></i> Back To Shop
									</a>
								</div>
								<div className='cart-shiping-btn update-btn'>
									<a className='btn btn-link' href='shop.html'>
										<i className='ion-ios-reload'></i> Back To Shop
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-4'></div>
					</div>
					<div className='row'>
						<div className='col-md-6 col-lg-4'>
							<div className='cart-calculate-discount-wrap mb-40'>
								<h4>Calculate shipping </h4>
								<div className='calculate-discount-content'>
									<div className='select-style'>
										<select className='select-active'>
											<option>Bangladesh</option>
											<option>Bahrain</option>
											<option>Azerbaijan</option>
											<option>Barbados</option>
											<option>Barbados</option>
										</select>
									</div>
									<div className='select-style'>
										<select className='select-active'>
											<option>State / County</option>
											<option>Bahrain</option>
											<option>Azerbaijan</option>
											<option>Barbados</option>
											<option>Barbados</option>
										</select>
									</div>
									<div className='input-style'>
										<input type='text' placeholder='Town / City' />
									</div>
									<div className='input-style'>
										<input type='text' placeholder='Postcode / ZIP' />
									</div>
									<div className='calculate-discount-btn'>
										<a className='btn btn-link' href='#/'>
											Update
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-lg-4'>
							<div className='cart-calculate-discount-wrap mb-40'>
								<h4>Coupon Discount </h4>
								<div className='calculate-discount-content'>
									<p>Enter your coupon code if you have one.</p>
									<div className='input-style'>
										<input type='text' placeholder='Coupon code' />
									</div>
									<div className='calculate-discount-btn'>
										<a className='btn btn-link' href='#/'>
											Apply Coupon
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-12 col-lg-4'>
							<div className='grand-total-wrap'>
								<div className='grand-total-content'>
									<h3>
										Subtotal <span>$180.00</span>
									</h3>
									<div className='grand-shipping'>
										<span>Shipping</span>
										<ul>
											<li>
												<input
													type='radio'
													name='shipping'
													value='info'
													// checked="checked"
												/>
												<label>Free shipping</label>
											</li>
											<li>
												<input
													type='radio'
													name='shipping'
													value='info'
													// checked="checked"
												/>
												<label>
													Flat rate: <span>$100.00</span>
												</label>
											</li>
											<li>
												<input
													type='radio'
													name='shipping'
													value='info'
													// checked="checked"
												/>
												<label>
													Local pickup: <span>$120.00</span>
												</label>
											</li>
										</ul>
									</div>
									<div className='shipping-country'>
										<p>Shipping to Bangladesh</p>
									</div>
									<div className='grand-total'>
										<h4>
											Total <span>$185.00</span>
										</h4>
									</div>
								</div>
								<div className='grand-total-btn'>
									<a className='btn btn-link' href='shop-checkout.html'>
										Proceed to checkout
									</a>
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
