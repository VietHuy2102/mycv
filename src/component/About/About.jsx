import React from "react";

export default function About() {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h5 className="mt-bottom">
                        <strong>About Me</strong>
                    </h5>
                    <p className="grey-text">
                        Mong muốn được làm việc trong môi trường chuyên nghiệp,
                        nhiều cơ hội học hỏi, phát triển bản thân. Với niềm yêu
                        thích, đam mê CNTT tôi mong muốn trở thành chuyên gia
                        trong lĩnh vực phát triển ứng dụng Web. Áp dụng những
                        kinh nghiệm, kỹ năng và kiến thức chuyên môn cộng với
                        thái độ cầu thị để phấn đấu trở thành một nhà quản lý
                        điều hành các dự án quan trọng giúp doanh nghiệp phát
                        triển bền vững mạnh.
                    </p>
                </div>
                <div className="card-action">
                    <h5>
                        <strong>PERSONAL INFO</strong>
                    </h5>
                    <div className="row mt">
                        <div className="col s12 m6 l6 xl6">
                            <p>
                                <strong>Address:</strong> 28 Trần Xuân Soạn
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                nguyenviethuy1002@gmail.com
                            </p>
                            <p>
                                <strong>Phone:</strong> 0979.412.859
                            </p>
                        </div>
                        <div className="s12 m6 l6 xl6">
                            <p>
                                <strong>Main Language:</strong> Tiếng Việt
                            </p>
                            <p>
                                <strong>Second Language:</strong> Tiếng Trung
                            </p>
                            <p>
                                <strong>Main Language:</strong> Tiếng Anh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
