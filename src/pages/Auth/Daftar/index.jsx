import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { publicRequest } from "../../../requestMethods";
import {
  registerStart,
  registerFailure,
  registerAccepted,
} from "../../../redux/userRedux";

import "./style.css";
import imgLogoTab from "../../../logo-light.svg";
import imgSignUp from "../../../assets/images/daftar.png";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const Daftar = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordConfirmVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();

  const user = useSelector((state) => state.user.currentUser);
  const isFetching = useSelector((state) => state.user.isFetching);
  const dispatch = useDispatch();
  let history = useHistory();

  const registered = async (dispatch, user) => {
    dispatch(registerStart());
    console.log(user);
    try {
      const res = await publicRequest.post("/register", user);
      // dispatch(registerSuccess(res.data));
      dispatch(registerAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil daftar akun!",
        text: "Silahkan masuk",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          history.push("/syncphonic-frontend/masuk");
        }, 100);
        reset();
      });
    } catch (err) {
      dispatch(registerFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal daftar akun!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickRegister = ({
    name,
    email,
    password,
    gender,
    telp_number,
    address,
  }) => {
    registered(dispatch, {
      name,
      email,
      password,
      gender,
      telp_number,
      address,
    });
  };

  useEffect(() => {
    if (user) {
      history.push("/syncphonic-frontend");
    }
  }, [history, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="main-container">
      <section className="auth-sidebar">
        <main className="auth-form-sidebar">
          <div className="auth-sidebar-content">
            <img
              src={imgSignUp}
              alt="daftar"
              className="img-fluid img-sidebar"
            />
          </div>
        </main>
      </section>
      <section className="auth-form">
        <main className="auth-form-main">
          <div className="auth-form-content">
            <p className="signup-desc-text text-left mt-4">
              <Link
                style={{ textDecoration: "none" }}
                to="/syncphonic-frontend"
              >
                <span className="signup-desc-text-signup">
                  <FaArrowCircleLeft /> &#00; Kembali ke Beranda
                </span>
              </Link>
            </p>
            <Link to="/syncphonic-frontend/">
              <img src={imgLogoTab} alt="logo" className="mb-4 img-footer" />
            </Link>
            <h1 className="signup-title">Daftar</h1>
            <form
              onSubmit={handleSubmit(handleClickRegister)}
              disabled={isFetching}
            >
              <div className="form-group">
                <label className="fw-bolder" htmlFor="inputNamaLengkap">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="form-control form-control-signup"
                  id="inputNamaLengkap"
                  {...register("name", {
                    required: true,
                    pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                    maxLength: 100,
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <p className="error">Nama lengkap wajib diisi</p>
                )}
                {errors.name && errors.name.type === "pattern" && (
                  <p className="error">Nama lengkap hanya berisi huruf</p>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <p className="error">Nama lengkap maksimal 100 karakter</p>
                )}
              </div>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputEmail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-signup"
                  id="inputEmail"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="error">Email wajib diisi</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="error">Email tidak valid</p>
                )}
              </div>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputPassword">
                  Password &nbsp;
                  <i onClick={togglePasswordVisiblity}>{eye}</i>
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control form-control-signup"
                  id="inputPassword"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="error">Password wajib diisi</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="error">Password minimal 8 karakter</p>
                )}
              </div>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputPasswordConfirm">
                  Konfirmasi Password &nbsp;
                  <i onClick={togglePasswordConfirmVisiblity}>{eye}</i>
                </label>
                <input
                  type={passwordConfirmShown ? "text" : "password"}
                  className="form-control form-control-signup"
                  id="inputPasswordConfirm"
                  {...register("password_confirm", {
                    validate: (value) => value === watch("password"),
                  })}
                />
                {errors.password_confirm &&
                  errors.password_confirm.type === "validate" && (
                    <p className="error">
                      Konfirmasi password wajib sama dengan password
                    </p>
                  )}
              </div>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputNomorTelepon">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  className="form-control form-control-signup"
                  id="inputNomorTelepon"
                  {...register("telp_number", {
                    required: true,
                    pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/i,
                    minLength: 11,
                    maxLength: 12,
                  })}
                />
                {errors.telp_number &&
                  errors.telp_number.type === "required" && (
                    <p className="error">Nomor telepon wajib diisi</p>
                  )}
                {errors.telp_number &&
                  errors.telp_number.type === "pattern" && (
                    <p className="error">Nomor telepon hanya berisi angka</p>
                  )}
                {errors.telp_number &&
                  errors.telp_number.type === "minLength" && (
                    <p className="error">Nomor telepon minimal 11 angka</p>
                  )}
                {errors.telp_number &&
                  errors.telp_number.type === "maxLength" && (
                    <p className="error">Nomor telepon maksimal 12 angka</p>
                  )}
              </div>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputJenisKelamin">
                  Jenis Kelamin
                </label>
                <div className="row">
                  <div className="col-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlinePria"
                        value="Pria"
                        defaultChecked
                        {...register("gender", { required: true })}
                      />
                      <label className="form-check-label" htmlFor="inlinePria">
                        Pria
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineWanita"
                        value="Wanita"
                        {...register("gender", { required: true })}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineWanita"
                      >
                        Wanita
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <label className="fw-bolder" htmlFor="inputAlamat">
                  Alamat
                </label>
                <input
                  type="text"
                  className="form-control form-control-signup"
                  id="inputAlamat"
                  {...register("address", {
                    required: true,
                    maxLength: 200,
                  })}
                />
                {errors.address && errors.address.type === "required" && (
                  <p className="error">Alamat wajib diisi</p>
                )}
                {errors.address && errors.address.type === "maxLength" && (
                  <p className="error">Alamat maksimal 200 karakter</p>
                )}
              </div>
              <div className="form-group form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="inputCheck"
                  {...register("agree", {
                    required: true,
                  })}
                />
                <label
                  className="form-check-label agreement"
                  htmlFor="inputCheck"
                >
                  Dengan melanjutkan, Anda menyetujui
                  <Link to="/syncphonic-frontend/kebijakan">
                    &#00; Perjanjian Pengguna dan Kebijakan Privasi
                  </Link>
                  &#00; kami.
                </label>
                {errors.agree && errors.agree.type === "required" && (
                  <p className="error">Pernyataan tersebut harus disetujui</p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-signup py-2"
                disabled={isFetching}
              >
                Daftar
              </button>
            </form>
            <p className="signup-desc-text text-left mt-4">
              Sudah punya akun?
              <Link
                style={{ textDecoration: "none" }}
                to="/syncphonic-frontend/masuk"
              >
                <span className="signup-desc-text-signup">&#00; Masuk</span>
              </Link>
            </p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Daftar;
