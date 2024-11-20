import React from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import { teamProject } from "../assets/teamProject"; // teamProject 데이터 가져오기

const Wrapper = styled.div`
  width: 100%;
  height: auto; /* 최소 높이를 100vh로 설정 */
  padding: 0 20px; /* 좌우 여백 추가 */
  box-sizing: border-box;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  @media screen and (max-width: 769px) {
    padding-top: 0;
  }
`;

const SubTitle = styled.div`
  width: 170px;
  height: 37px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  margin-top: 70px;
  margin-bottom: 40px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
`;

const TeamWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Project = styled.div`
  width: 70%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  gap: 20px;
  .projectImage {
    img {
      width: 200px;
      height: 250px;
      border-radius: 10px;
    }
  }

  .projectDetails {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    .projectSkill {
      display: flex;
      justify-content: space-between;
      .projectEtc {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
        img {
          width: 25px;
          height: 25px;
        }
      }
      .urlImage {
        display: flex;
        gap: 20px;
        a {
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;

const TeamProject = () => {
  return (
    <Wrapper>
      <Inner id="TeamProject">
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span>Team Projects</span>
        </SubTitle>
        <TeamWrap>
          {teamProject.map((project, index) => (
            <Project key={index}>
              <div className="projectImage">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projectDetails">
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
                <div className="projectSkill">
                  <div className="projectEtc">
                    <img src={project.skillOne} alt={project.title} />
                    {project.skillTwo && (
                      <img src={project.skillTwo} alt={project.title} />
                    )}
                    {project.skillThree && (
                      <img src={project.skillThree} alt={project.title} />
                    )}
                  </div>
                  <div className="urlImage">
                    <a
                      href={project.firstUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="firstUrl"
                        src={project.firstUrlImage}
                        alt="GitHub"
                      />
                    </a>
                    <a
                      href={project.secondUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="secondUrl"
                        src={project.secondUrlImage}
                        alt="Demo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Project>
          ))}
        </TeamWrap>
      </Inner>
    </Wrapper>
  );
};

export default TeamProject;
