import React from "react";
import { Link } from "react-router-dom";
import jQuery from "jquery";
import Sidebar from "../../../../components/Dashboard/Admin/Sidebar/index";
import Navbar from "../../../../components/Dashboard/Admin/Navbar/index";
import Footer from "../../../../components/Dashboard/Admin/Footer/index";
import {
  FaUserEdit,
  FaWarehouse,
  FaBlog,
  FaTachometerAlt,
  FaPlus,
  FaTrash,
  FaPen,
  FaCheck,
} from "react-icons/fa";
import "../style.css";

(function ($) {
  "use strict";

  $(function () {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $(window).on("resize", function () {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }

      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        if ($(window).width() > 768) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      }
    );
  });
})(jQuery);

function Instrument() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Instrument</h1>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          Dashboard
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaTachometerAlt />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Studio
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaWarehouse />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/studio"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Blog
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaBlog />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/blog"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Member
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaUserEdit />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/user"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-5 col-sm-6 col-6 my-auto">
                        <h2 className="h-100 my-auto">List Instrument</h2>
                      </div>
                      <div className="col-md-7 col-sm-6 col-6">
                        <a
                          href="#addInstrumentModal"
                          className="btn btn-add"
                          data-toggle="modal"
                        >
                          <i>
                            <FaPlus />
                          </i>
                          <span>Tambah</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th className="table-column-text">Nama</th>
                        <th className="table-column-text">Kategori</th>
                        <th className="table-column-text">Harga</th>
                        <th className="table-column-text">Gambar</th>
                        <th className="table-column-text">Jumlah</th>
                        <th className="table-column-text">Status</th>
                        <th className="table-column-text">Deskripsi</th>
                        <th className="table-column-text">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-column-text">Keyboardz</td>
                        <td className="table-column-text">Elektrik</td>
                        <td className="table-column-text">200000</td>
                        <td className="table-column-text"></td>
                        <td className="table-column-text">0</td>
                        <td className="table-column-text">tersedia</td>
                        <td className="table-column-text">
                          Biola adalah sebuah alat musik dawai yang dimainkan
                          dengan cara digesek. Biola memiliki empat senar yang
                          disetel berbeda satu sama lain dengan interval
                          sempurna kelima. Nada yang paling rendah adalah G
                        </td>
                        <td>
                          <a
                            href="#editInstrumentModal"
                            className="edit"
                            data-toggle="modal"
                          >
                            <i data-toggle="tooltip" title="Edit">
                              <FaPen />
                            </i>
                          </a>
                          <a
                            href="#deleteInstrumentModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i data-toggle="tooltip" title="Hapus">
                              <FaTrash />
                            </i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">
                      Menampilkan <b>1</b> dari <b>1</b> data
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-5 my-auto">
                        <h2 className="h-100 my-auto">Pesanan Instrument</h2>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th className="table-column-text">Nama Instrument</th>
                        <th className="table-column-text">Harga</th>
                        <th className="table-column-text">Tanggal</th>
                        <th className="table-column-text">Durasi</th>
                        <th className="table-column-text">Nama Pemesan</th>
                        <th className="table-column-text">Email</th>
                        <th className="table-column-text">Total</th>
                        <th className="table-column-text">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-column-text">Keyboard</td>
                        <td className="table-column-text">200000</td>
                        <td className="table-column-text">25-05-2021</td>
                        <td className="table-column-text">1 Hari</td>
                        <td className="table-column-text">alvin</td>
                        <td className="table-column-text">alvin@gmail.com</td>
                        <td className="table-column-text">200000</td>
                        <td>
                          <a
                            href="#confirmInstrumentModal"
                            className="confirm"
                            data-toggle="modal"
                          >
                            <i data-toggle="tooltip" title="Konfirmasi">
                              <FaCheck />
                            </i>
                          </a>
                          <a
                            href="#deleteBookingModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i data-toggle="tooltip" title="Hapus">
                              <FaTrash />
                            </i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">
                      Menampilkan <b>1</b> dari <b>1</b> data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="addInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Tambah Instrument</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Nama</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Kategori</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Harga</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="customFile">
                        Gambar
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-dashboard"
                        id="customFile"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Jumlah</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Status</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Deskripsi</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Tambah"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="confirmInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Konfirmasi Pesanan</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin memvalidasi pesanan ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Konfirmasi"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="editInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Instrument</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Nama</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Kategori</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Harga</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="customFile">
                        Gambar
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-dashboard"
                        id="customFile"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Jumlah</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Status</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Deskripsi</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Edit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="deleteInstrumentModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Hapus Instrument</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin menghapus data ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Hapus"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="deleteBookingModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Hapus Pesanan</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin menghapus pesanan ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Hapus"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Instrument;
